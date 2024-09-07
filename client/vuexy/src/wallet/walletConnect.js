import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";

const provider = new WalletConnectProvider({
  infuraId: "f595bfeee5204bc0800040fc99f53813", 
});

export const connectWallet = async () => {
  try {
    await provider.enable();
    const web3Provider = new ethers.providers.Web3Provider(provider);
    const signer = web3Provider.getSigner();
    return { provider, signer };
  } catch (error) {
    console.error("Failed to connect wallet", error);
    throw error;
  }
};