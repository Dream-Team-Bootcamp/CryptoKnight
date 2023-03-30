export async function handleWalletConnect(signClient, web3Modal) {
    try {
      if (!signClient) throw Error("SignClient does not exist");
  
      const proposalNamespace = {
        eip155: {
          methods: ["eth_sendTransaction"],
          chains: ["eip155:5"],
          events: ["connect", "disconnect"],
        },
      };
  
      const { uri } = await signClient.connect({
        requiredNamespaces: proposalNamespace,
      });
  
      if (uri) {
        web3Modal.openModal({ uri });
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  }
  