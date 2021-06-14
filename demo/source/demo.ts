import * as OracleSdk from '../../sdk/source/index'
import { ethers } from '../node_modules/ethers'
const JSON_RPC = 'https://eth-mainnet.alchemyapi.io/v2/akJ4Iz9CBxJ6HduDFaNUwwg1igCzQmDk'

async function main() {
	const address = BigInt("0xbb2b8038a1640196fbe3e38816f3e67cba72d940")
	const token0 = BigInt("0x2260fac5e5542a773aa44fbcfedf7c193bc2c599")
	const blockNumber = BigInt("12613921")
	const proof = await OracleSdk.getProof(getStorageAt, getProof, getBlockByNumber, address, token0, blockNumber)

	const abi = "[{\"inputs\":[],\"name\":\"MAX_BLOCKS\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MIN_BLOCKS\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERIOD\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IUniswapV2Pair\",\"name\":\"pair\",\"type\":\"address\"},{\"internalType\":\"uint32\",\"name\":\"blockTimestamp\",\"type\":\"uint32\"}],\"name\":\"_get\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"callerInfo\",\"outputs\":[{\"internalType\":\"contract IUniswapV2Pair\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"get\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"uniswapV2Pair\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"bytes\",\"name\":\"block\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"accountProofNodesRlp\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"reserveAndTimestampProofNodesRlp\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"priceAccumulatorProofNodesRlp\",\"type\":\"bytes\"}],\"internalType\":\"struct UniswapOracle.ProofData\",\"name\":\"proofData\",\"type\":\"tuple\"}],\"name\":\"getAccountStorageRoot\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"storageRootHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"blockTimestamp\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IUniswapV2Pair\",\"name\":\"uniswapV2Pair\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"denominationTokenIs0\",\"type\":\"bool\"}],\"name\":\"getCurrentPriceCumulativeLast\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"priceCumulativeLast\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IUniswapV2Pair\",\"name\":\"pair\",\"type\":\"address\"}],\"name\":\"getDataParameter\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IUniswapV2Pair\",\"name\":\"uniswapV2Pair\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"denominationToken\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"minBlocksBack\",\"type\":\"uint8\"},{\"internalType\":\"uint8\",\"name\":\"maxBlocksBack\",\"type\":\"uint8\"},{\"components\":[{\"internalType\":\"bytes\",\"name\":\"block\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"accountProofNodesRlp\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"reserveAndTimestampProofNodesRlp\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"priceAccumulatorProofNodesRlp\",\"type\":\"bytes\"}],\"internalType\":\"struct UniswapOracle.ProofData\",\"name\":\"proofData\",\"type\":\"tuple\"}],\"name\":\"getPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IUniswapV2Pair\",\"name\":\"uniswapV2Pair\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"denominationTokenIs0\",\"type\":\"bool\"},{\"internalType\":\"uint8\",\"name\":\"minBlocksBack\",\"type\":\"uint8\"},{\"internalType\":\"uint8\",\"name\":\"maxBlocksBack\",\"type\":\"uint8\"},{\"components\":[{\"internalType\":\"bytes\",\"name\":\"block\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"accountProofNodesRlp\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"reserveAndTimestampProofNodesRlp\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"priceAccumulatorProofNodesRlp\",\"type\":\"bytes\"}],\"internalType\":\"struct UniswapOracle.ProofData\",\"name\":\"proofData\",\"type\":\"tuple\"}],\"name\":\"getPriceRaw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IUniswapV2Pair\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"pairs\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"priceCumulativeLast\",\"type\":\"uint256\"},{\"internalType\":\"uint32\",\"name\":\"blockTimestampLast\",\"type\":\"uint32\"},{\"internalType\":\"uint144\",\"name\":\"priceAverage\",\"type\":\"uint144\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"peek\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"peekSpot\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"rate\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"reserveTimestampSlotHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"token0Slot\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"token1Slot\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"contract IUniswapV2Pair\",\"name\":\"uniswapV2Pair\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"bytes\",\"name\":\"block\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"accountProofNodesRlp\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"reserveAndTimestampProofNodesRlp\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"priceAccumulatorProofNodesRlp\",\"type\":\"bytes\"}],\"internalType\":\"struct UniswapOracle.ProofData\",\"name\":\"proofData\",\"type\":\"tuple\"}],\"name\":\"updateWithProof\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IUniswapV2Pair\",\"name\":\"uniswapV2Pair\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"minBlocksBack\",\"type\":\"uint8\"},{\"internalType\":\"uint8\",\"name\":\"maxBlocksBack\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"slotHash\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"bytes\",\"name\":\"block\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"accountProofNodesRlp\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"reserveAndTimestampProofNodesRlp\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"priceAccumulatorProofNodesRlp\",\"type\":\"bytes\"}],\"internalType\":\"struct UniswapOracle.ProofData\",\"name\":\"proofData\",\"type\":\"tuple\"}],\"name\":\"verifyBlockAndExtractReserveData\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"priceCumulativeLast\",\"type\":\"uint256\"},{\"internalType\":\"uint112\",\"name\":\"reserve0\",\"type\":\"uint112\"},{\"internalType\":\"uint112\",\"name\":\"reserve1\",\"type\":\"uint112\"},{\"internalType\":\"uint256\",\"name\":\"reserveTimestamp\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]"
	const provider = new ethers.providers.JsonRpcProvider(JSON_RPC)
	const uniswapOracle = new ethers.Contract("0xb628f865e180d224041d3b7cb2ac0cb289aeb73e", abi, provider)
	const result = await uniswapOracle.getAccountStorageRoot(ethers.utils.hexValue(address), proof)
}

const getStorageAt = async (address: bigint, position: bigint, block: bigint | 'latest'): Promise<bigint> => {
	const provider = new ethers.providers.JsonRpcProvider(JSON_RPC)
	return provider.getStorageAt(ethers.utils.hexValue(address), position, 12596295).then(value => BigInt(value))
}

const getProof = async (address: bigint, positions: readonly bigint[], block: bigint):Promise<OracleSdk.ProofResult> => {
	const provider = new ethers.providers.JsonRpcProvider(JSON_RPC)
	const proof = await provider.send("eth_getProof", [ ethers.utils.hexValue(address), positions.map(value => ethers.utils.formatBytes32String(value.toString())), ethers.utils.hexValue(block)])

	return {
		accountProof: proof.accountProof.map((result: string) => ethers.utils.arrayify(result)),
		storageProof: proof.storageProof.map((result: { key: any; value: any; proof: [any];}) => {
			return {
				key: BigInt(result.key),
				value: BigInt(result.value),
				proof: result.proof.map(result => ethers.utils.arrayify(result)),
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
		extraData: ethers.utils.arrayify(block.extraData),
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
