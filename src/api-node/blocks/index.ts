import { TLong } from '../../interface';
import request from '../../tools/request';
import { TTransactionFromAPI } from '@waves/ts-types';

/**
 * GET /blocks/headers/seq/{from}/{to}
 * Get block headers at specified heights
 * @param base
 * @param from
 * @param to
 */
export function fetchHeadersSeq(base: string, from: number, to: number, options: RequestInit = Object.create(null)): Promise<Array<IBlockHeader>> {
    return request({
        base,
        url: `/blocks/headers/seq/${from}/${to}`,
        options
    })
}

/**
 * GET /blocks/headers/last
 * Last block header
 * @param base
 */
export function fetchHeadersLast(base: string, options: RequestInit = Object.create(null)): Promise<IBlockHeader> {
    return request({
        base,
        url: '/blocks/headers/last',
        options
    });
}

/**
 * GET /blocks/height/{id}
 * Height of a block by its id
 * @param base
 * @param id
 */
export function fetchHeightById(base: string, id: string, options: RequestInit = Object.create(null)): Promise<{ height: number }> {
    return request({
        base,
        url: `/blocks/height/${id}`,
        options
    })
}

/**
 * GET /blocks/headers/at/{height}
 * Block header at height
 * @param base
 * @param height
 */
export function fetchHeadersAt(base: string, height: number, options: RequestInit = Object.create(null)): Promise<IBlockHeader> {
    return request({
        base,
        url: `/blocks/headers/at/${height}`,
        options
    });
}

/**
 * GET /blocks/at/{height}
 * Get block at specified height
 * @param base
 * @param height
 */
export function BlockAt(base: string, height: number, options: RequestInit = Object.create(null)): Promise<IBlock> {
    return request({
        base,
        url: `/blocks/at/${height}`,
        options
    });
}

/**
 * GET /blocks/seq/{from}/{to}
 * Block range
 * @param base
 * @param from
 * @param to
 */
export function fetchSeq(base: string, from: number, to: number, options: RequestInit = Object.create(null)): Promise<Array<IBlock>> {
    return request({
        base,
        url: `/blocks/seq/${from}/${to}`,
        options
    })
}

/**
 * GET /blocks/signature/{signature}
 * Get block by its signature
 * @param base
 * @param signature
 */
export function fetchBlockBySignature(base: string, signature: string, options: RequestInit = Object.create(null)): Promise<IBlock> {
    return request({
        base,
        url: `/blocks/signature/${signature}`,
        options
    })
}

/**
 * GET /blocks/first
 * Get genesis block
 * @param base
 */
export function fetchFirst(base: string, options: RequestInit = Object.create(null)): Promise<IBlock> {
    return request({
        base,
        url: `/blocks/first`,
        options
    })
}

/**
 * /blocks/address/{address}/{from}/{to}
 * Get list of blocks generated by specified address
 * @param base
 * @param address
 * @param from
 * @param to
 */
export function fetchBlocksByAddress(base: string, address: string, from: number, to: number, options: RequestInit = Object.create(null)): Promise<Array<IBlock>>  {
    return request({
        base,
        url: `/blocks/address/${address}/${from}/${to}`,
        options
    })
}

/**
 * GET /blocks/last
 * Last block
 * @param base
 */
export function fetchLast(base: string, options: RequestInit = Object.create(null)): Promise<IBlock> {
    return request({
        base,
        url: '/blocks/last',
        options
    })
}

/**
 * GET /blocks/delay/{id}/{blockNum}
 * Average delay in milliseconds between last blockNum blocks starting from block with id
 * @param base
 * @param id
 * @param blockNum
 */
export function fetchDelay(base: string, id: string, blockNum: string, options: RequestInit = Object.create(null)): Promise<{ delay: number}> {
    return request({
        base,
        url: `/blocks/delay/${id}/${blockNum}`,
        options
    })
}

/**
 * GET /blocks/height
 * @param base
 */
export function fetchHeight(base: string, options: RequestInit = Object.create(null)): Promise<{ height: number }> {
    return request({
        base,
        url: '/blocks/height',
        options
    });
}


export interface IBlockHeader {
    blocksize: number;
    reward: TLong;
    signature: string;
    generator: string;
    version: number;
    reference: string;
    features: Array<string>;
    totalFee: TLong;
    desiredReward: number;
    transactionCount: number;
    timestamp: number;
    height: number;
    'nxt-consensus': {
        'base-target': number;
        'generation-signature': string;
    }
}

export interface IBlock extends IBlockHeader {
    fee: TLong;
    transactions: Array<TTransactionFromAPI<TLong>>;
}
