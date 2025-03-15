import { LangflowClient } from "@datastax/langflow-client";
import { Flow } from "@datastax/langflow-client/dist/flow";


export let flow: Flow;

export const initializeLangflow = async () => {
    try {
        const dsLangflowClient = new LangflowClient({
            langflowId: process.env.LANGFLOW_ID, 
            apiKey: process.env.DATASTAX_TOKEN
        });

        flow = dsLangflowClient.flow(process.env.FLOW_ID);

        console.log("Connected to langflow api")

        // const response = await flow.run("6")
        // console.log(response.chatOutputText())
    } catch (error) {
        console.log(error)
    }

}