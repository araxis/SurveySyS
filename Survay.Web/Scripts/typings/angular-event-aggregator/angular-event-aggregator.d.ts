declare module ngEventAgregator {
    
    interface IEventAggragator {
        on(event: string, callback: (...args: any[])=>any): void;
        off(event: string, callback: (...args: any[]) => any): void;
        trigger(event:string, eventObject):void;
    }
} 