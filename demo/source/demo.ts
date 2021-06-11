import * as OracleSdk from '../../sdk/source/index';
import * as rlpEncoder from '../../sdk/source/rlp-encoder'
import { ethers, BigNumber } from '../node_modules/ethers';
const Web3 = require('../node_modules/web3')
const JSON_RPC = 'https://eth-mainnet.alchemyapi.io/v2/akJ4Iz9CBxJ6HduDFaNUwwg1igCzQmDk'

async function main() {
	const address = BigInt("0xbb2b8038a1640196fbe3e38816f3e67cba72d940")
	const token0 = BigInt("0x2260fac5e5542a773aa44fbcfedf7c193bc2c599")
	const blockNumber = BigInt("12613921")
	const proof = await OracleSdk.getProof(getStorageAt, getProof, getBlockByNumber, address, token0, blockNumber)
	console.log(proof)
}


export function wireEncodeNumber(value: number | bigint, padding: number = 0): string {
	if (value < 0) throw new Error(`Wire encoded values must be positive.  Received: ${value}`)
	if (typeof value === 'number' && value > 2**52) throw new Error(`Wire encoded number values cannot be bigger than ${2**52}.  Received: ${value}`)
	if (typeof value === 'bigint' && value >= 2**256) throw new Error(`Wire encoded bigint values must be smaller than ${2n**256n}.  Received: ${value}`)
	return `0x${value.toString(16).padStart(padding, '0')}`
}

const getStorageAt = async (address: bigint, position: bigint, block: bigint | 'latest'): Promise<bigint> => {
	const provider = new ethers.providers.JsonRpcProvider(JSON_RPC)
	return provider.getStorageAt(wireEncodeNumber(address), position, 12596295).then(value => BigInt(value))
}

const getProof = async (address: bigint, positions: readonly bigint[], block: bigint):Promise<OracleSdk.ProofResult> => {
	const provider = new ethers.providers.JsonRpcProvider(JSON_RPC)
	const proof = await provider.send("eth_getProof", [ wireEncodeNumber(address), positions.map(value => ethers.utils.formatBytes32String(value.toString())), ethers.utils.hexValue(block)])
	return {
		accountProof: proof.accountProof.map((result: string) => rlpEncoder.hexStringToUint8Array(result)),
		storageProof: proof.storageProof.map((result: { key: any; value: any; proof: [any];}) => {
			return {
				key: BigInt(result.key),
				value: BigInt(result.value),
				proof: result.proof.map(result => rlpEncoder.hexStringToUint8Array(result)),
			}
		}),
	}
}

const getBlockByNumber = async (blockNumber: bigint | 'latest'):Promise<OracleSdk.Block | null> => {
	const provider = new ethers.providers.JsonRpcProvider(JSON_RPC)
	const block = await provider.send("eth_getBlockByNumber", [(blockNumber !== 'latest') ? ethers.utils.hexValue(blockNumber): blockNumber, false])
	return {
		parentHash: BigInt(block.parentHash),
		sha3Uncles: BigInt(block.sha3Uncles),
		miner: BigInt(block.miner),
		stateRoot: BigInt(block.stateRoot),
		transactionsRoot: BigInt(block.transactionsRoot),
		receiptsRoot: BigInt(block.receiptsRoot),
		logsBloom: BigInt(block.logsBloom),
		difficulty: BigInt(block.difficulty),
		number: BigInt(block.number),
		gasLimit: BigInt(block.gasLimit),
		gasUsed: BigInt(block.gasUsed),
		timestamp: BigInt(block.timestamp),
		extraData: rlpEncoder.hexStringToUint8Array(block.extraData),
		mixHash: BigInt(block.mixHash),
		nonce: BigInt(block.nonce),
	}
}

main().then(() => {
	process.exit(0)
}).catch(error => {
	console.dir(error, { depth: null })
	process.exit(1)
})
