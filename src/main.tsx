import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { Loader } from './components/ui/Loader.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Principal } from './Principal.tsx'


const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={ client }>
			<ReactQueryDevtools/>

				{/* <App/> */}

					<Principal/>
		</QueryClientProvider>
	</React.StrictMode>
)
