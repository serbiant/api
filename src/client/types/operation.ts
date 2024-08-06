import type { SimpleUpperCase } from "./misc";
import type { AssetInfoResponse } from "./asset";

export type OperationType =
  | "swap"
  | "send_liquidity"
  | "refund_liquidity"
  | "add_liquidity"
  | "withdraw_liquidity"
  | "set_fees";
export type OperationTypeParam = SimpleUpperCase<OperationType>;

export type OperationDetails = {
  pool_tx_hash: string;
  pool_address: string;
  router_address: string;
  pool_tx_lt: number;
  pool_tx_timestamp: string;
  destination_wallet_address: string;
  operation_type: OperationType;
  success: boolean;
  exit_code: string;
  asset0_address: string;
  asset0_amount: string;
  asset0_delta: string;
  asset0_reserve: string;
  asset1_address: string;
  asset1_amount: string;
  asset1_delta: string;
  asset1_reserve: string;
  lp_token_delta: string;
  lp_token_supply: string;
  fee_asset_address: string;
  lp_fee_amount: string;
  protocol_fee_amount: string;
  referral_fee_amount: string;
  wallet_address: string;
  wallet_tx_lt: string;
  wallet_tx_hash: string;
  wallet_tx_timestamp: string;
};

export type OperationInfoResponse = {
  operation: OperationDetails;
  asset0_info: AssetInfoResponse;
  asset1_info: AssetInfoResponse;
};
