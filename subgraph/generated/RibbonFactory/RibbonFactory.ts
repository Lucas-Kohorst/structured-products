// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AdapterSet extends ethereum.Event {
  get params(): AdapterSet__Params {
    return new AdapterSet__Params(this);
  }
}

export class AdapterSet__Params {
  _event: AdapterSet;

  constructor(event: AdapterSet) {
    this._event = event;
  }

  get protocolName(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get adapterAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class InstrumentCreated extends ethereum.Event {
  get params(): InstrumentCreated__Params {
    return new InstrumentCreated__Params(this);
  }
}

export class InstrumentCreated__Params {
  _event: InstrumentCreated;

  constructor(event: InstrumentCreated) {
    this._event = event;
  }

  get symbol(): string {
    return this._event.parameters[0].value.toString();
  }

  get instrumentAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class InstrumentCreated1 extends ethereum.Event {
  get params(): InstrumentCreated1__Params {
    return new InstrumentCreated1__Params(this);
  }
}

export class InstrumentCreated1__Params {
  _event: InstrumentCreated1;

  constructor(event: InstrumentCreated1) {
    this._event = event;
  }

  get symbol(): string {
    return this._event.parameters[0].value.toString();
  }

  get instrumentAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get dToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ProxyCreated extends ethereum.Event {
  get params(): ProxyCreated__Params {
    return new ProxyCreated__Params(this);
  }
}

export class ProxyCreated__Params {
  _event: ProxyCreated;

  constructor(event: ProxyCreated) {
    this._event = event;
  }

  get logic(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get proxyAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get initData(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RibbonFactory extends ethereum.SmartContract {
  static bind(address: Address): RibbonFactory {
    return new RibbonFactory("RibbonFactory", address);
  }

  adapters(param0: BigInt): Address {
    let result = super.call("adapters", "adapters(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_adapters(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("adapters", "adapters(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAdapter(param0: string): Address {
    let result = super.call("getAdapter", "getAdapter(string):(address)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toAddress();
  }

  try_getAdapter(param0: string): ethereum.CallResult<Address> {
    let result = super.tryCall("getAdapter", "getAdapter(string):(address)", [
      ethereum.Value.fromString(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  instrumentAdmin(): Address {
    let result = super.call(
      "instrumentAdmin",
      "instrumentAdmin():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_instrumentAdmin(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "instrumentAdmin",
      "instrumentAdmin():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  instruments(param0: string): Address {
    let result = super.call("instruments", "instruments(string):(address)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toAddress();
  }

  try_instruments(param0: string): ethereum.CallResult<Address> {
    let result = super.tryCall("instruments", "instruments(string):(address)", [
      ethereum.Value.fromString(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isInstrument(param0: Address): boolean {
    let result = super.call("isInstrument", "isInstrument(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isInstrument(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isInstrument", "isInstrument(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getInstrument(_name: string): Address {
    let result = super.call(
      "getInstrument",
      "getInstrument(string):(address)",
      [ethereum.Value.fromString(_name)]
    );

    return result[0].toAddress();
  }

  try_getInstrument(_name: string): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getInstrument",
      "getInstrument(string):(address)",
      [ethereum.Value.fromString(_name)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  newInstrument(_logic: Address, _initData: Bytes): Address {
    let result = super.call(
      "newInstrument",
      "newInstrument(address,bytes):(address)",
      [ethereum.Value.fromAddress(_logic), ethereum.Value.fromBytes(_initData)]
    );

    return result[0].toAddress();
  }

  try_newInstrument(
    _logic: Address,
    _initData: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "newInstrument",
      "newInstrument(address,bytes):(address)",
      [ethereum.Value.fromAddress(_logic), ethereum.Value.fromBytes(_initData)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAdapters(): Array<Address> {
    let result = super.call("getAdapters", "getAdapters():(address[])", []);

    return result[0].toAddressArray();
  }

  try_getAdapters(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall("getAdapters", "getAdapters():(address[])", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _instrumentAdmin(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class Initialize1Call extends ethereum.Call {
  get inputs(): Initialize1Call__Inputs {
    return new Initialize1Call__Inputs(this);
  }

  get outputs(): Initialize1Call__Outputs {
    return new Initialize1Call__Outputs(this);
  }
}

export class Initialize1Call__Inputs {
  _call: Initialize1Call;

  constructor(call: Initialize1Call) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class Initialize1Call__Outputs {
  _call: Initialize1Call;

  constructor(call: Initialize1Call) {
    this._call = call;
  }
}

export class NewInstrumentCall extends ethereum.Call {
  get inputs(): NewInstrumentCall__Inputs {
    return new NewInstrumentCall__Inputs(this);
  }

  get outputs(): NewInstrumentCall__Outputs {
    return new NewInstrumentCall__Outputs(this);
  }
}

export class NewInstrumentCall__Inputs {
  _call: NewInstrumentCall;

  constructor(call: NewInstrumentCall) {
    this._call = call;
  }

  get _logic(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _initData(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class NewInstrumentCall__Outputs {
  _call: NewInstrumentCall;

  constructor(call: NewInstrumentCall) {
    this._call = call;
  }

  get instrumentAddress(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class BurnGasTokensCall extends ethereum.Call {
  get inputs(): BurnGasTokensCall__Inputs {
    return new BurnGasTokensCall__Inputs(this);
  }

  get outputs(): BurnGasTokensCall__Outputs {
    return new BurnGasTokensCall__Outputs(this);
  }
}

export class BurnGasTokensCall__Inputs {
  _call: BurnGasTokensCall;

  constructor(call: BurnGasTokensCall) {
    this._call = call;
  }
}

export class BurnGasTokensCall__Outputs {
  _call: BurnGasTokensCall;

  constructor(call: BurnGasTokensCall) {
    this._call = call;
  }
}

export class SetAdapterCall extends ethereum.Call {
  get inputs(): SetAdapterCall__Inputs {
    return new SetAdapterCall__Inputs(this);
  }

  get outputs(): SetAdapterCall__Outputs {
    return new SetAdapterCall__Outputs(this);
  }
}

export class SetAdapterCall__Inputs {
  _call: SetAdapterCall;

  constructor(call: SetAdapterCall) {
    this._call = call;
  }

  get protocolName(): string {
    return this._call.inputValues[0].value.toString();
  }

  get adapter(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetAdapterCall__Outputs {
  _call: SetAdapterCall;

  constructor(call: SetAdapterCall) {
    this._call = call;
  }
}
