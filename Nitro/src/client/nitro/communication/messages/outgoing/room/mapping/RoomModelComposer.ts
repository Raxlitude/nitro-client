import { IMessageComposer } from '../../../../../../core/communication/messages/IMessageComposer';

export class RoomModelComposer implements IMessageComposer
{
    private _data: any[];

    constructor()
    {
        this._data = [];
    }

    public getMessageArray(): any[]
    {
        return this._data;
    }

    public dispose(): void
    {
        return;
    }
}