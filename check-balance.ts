import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
    throw new Error("Provide a public key to check the balance of!");
}

// // To connect to devnet
// const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// To connect to mainnet
const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");

try {
    const publicKey = new PublicKey(suppliedPublicKey);

    const balanceInLamports = await connection.getBalance(publicKey);

    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

    console.log(
        `💰 Finished!  The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
    );
} catch (error) {
    console.error("There was an error checking the balance of the account.  Possible reasons include: Invalid Public Key", error);
}