

export type ScrollType = 10 | 30 | 60

export type ScrollResult = 'success' | 'failed' | 'destroyed';

export interface IScrollLog {
    scrollType: ScrollType,
    scrollResult: ScrollResult,
}