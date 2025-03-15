import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LoginPage = () => {
    return (
        <div className="flex flex-col gap-8 justify-center items-center w-screen h-screen bg-gradient-to-br from-[#ECECDF] to-[#899cfb]">
            <Card className="w-96 p-6 shadow-lg rounded-2xl bg-[#ECECDF]/40 backdrop-blur-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl text-[#1F1F41]">Roomie</CardTitle>
                    <CardDescription className="text-gray-600">Login to access your account</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 w-full">
                    <input
                        className="bg-gray-100 rounded-md p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1F1F41]"
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        className="bg-gray-100 rounded-md p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1F1F41]"
                        type="password"
                        placeholder="Password"
                    />
                    <Button className="bg-[#1F1F41] text-white py-2 rounded-md hover:bg-[#2A2A5A] transition-all">Login</Button>
                </CardContent>
            </Card>
            <Card className="w-96 p-6 shadow-lg rounded-2xl bg-[#ECECDF]/40 backdrop-blur-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-[#1F1F41]">Find your connection </CardTitle>
                    <CardDescription className="text-gray-600">New here? <u><b>Join Now</b></u></CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
};

export default LoginPage;