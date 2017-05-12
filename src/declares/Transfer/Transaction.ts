/**
 * Created by yunge on 17/1/19.
 */

export interface TradeFee {

    channelId: string;//(渠道ID)
    realChannelId: string;//（渠道名称）
    amount: number;//（手续费金额）
    feeType: string;//（手续费类型）
}

export interface CouponVo {
    id: string;//(序号）
    name: string;//（名称）
}

export interface Transaction {
    /**
     * pk
     */
    id: number;
    /**
     * 借款用户ID
     */
    borrowerId: string;

    /**
     * 借出户ID
     */
    loanId: string;

    /**
     * 平台ID
     */
    platformId: string;

    /**
     * 产品ID
     */
    productId: string;

    /**
     * 交易流水
     */
    transactionNo: string;

    /**
     * 交易类型
     */
    tradeType: string;

    /**
     * 费用列表
     */
    fees: [TradeFee];

    /**
     * 优惠列表
     */
    coupons: [CouponVo];

    /**
     * 事件类型
     */
    eventType: string;

    /**
     * 金额
     */
    amount: number
}
