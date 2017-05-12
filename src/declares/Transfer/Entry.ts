/**
 * Created by yunge on 17/1/19.
 */


//分录明细
export class Entry {
    /**
     * pk
     */
    id: number;

    /**
     * 分录描述名
     */
    entryName: string;

    /**
     * 订单号
     */
    orderId: string;

    /**
     * 会计凭证ID
     */
    voucherId: number;

    /**
     * 尾科目编号
     */
    catRearId: string;

    /**
     * 借贷标记
     */
    flagDc: string;

    /**
     * 金额
     */
    amount: number;

    /**
     * 前置科目编号
     */
    catPrefixId: string;

    /**
     * 记账状态
     */
    status: number;

    /**
     * 请求方
     */
    requestorId: string;

    /**
     * 扩展内容
     */
    attributes: string;

    /**
     * 逻辑删除
     */
    isActive: boolean;

    /**
     * 插入时间
     */
    insertTime: any;

    /**
     * 更新时间
     */
    updateTime: any;
}
