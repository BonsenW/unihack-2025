import { LangflowClient } from "@datastax/langflow-client";
import { Flow } from "@datastax/langflow-client/dist/flow";


export let flow: Flow;

export const initializeLangflow = async () => {

    const dsLangflowClient = new LangflowClient({
        langflowId: process.env.LANGFLOW_ID, 
        apiKey: process.env.DATASTAX_TOKEN
    });

    flow = dsLangflowClient.flow(process.env.FLOW_ID);

    // const response = await flow.run("6")
    // console.log(response.chatOutputText())

}