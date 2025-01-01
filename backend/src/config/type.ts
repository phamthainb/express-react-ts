import { Wallet } from "../models/Wallet";

export interface TxWalletArgs {
  senderWallet: Wallet; // ID of the sender wallet
  recipientWallet: Wallet; // ID of the recipient wallet
  amount: number; // Amount to transfer
  token?: string; // Token mint address, default is SOL
}
