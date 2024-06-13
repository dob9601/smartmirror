import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Weather from "./weather/Weather"
import Clock from "./Clock"

function App() {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <div className="bg-black">
                <div className="w-screen h-screen bg-black border-r border-b rounded-br-2xl border-primary p-4">
                    <div className="relative w-full h-full overflow-hidden text-primary font-sans">
                        <div className="w-full h-full m-2">
                            <div className="absolute left-0 top-0">
                                <Clock />
                            </div>
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
