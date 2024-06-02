import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Weather from "./weather/Weather"

function App() {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <div className="bg-black">
                <div className="w-screen h-screen bg-black border-r-2 border-b-2 rounded-br-2xl border-white p-4">
                    <div className="relative w-full h-full overflow-hidden text-white font-sans">
                        <div className="w-full h-full m-2">
                            <div className="absolute right-0 bottom-0">
                                <Weather />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </QueryClientProvider>
    )
}

export default App
