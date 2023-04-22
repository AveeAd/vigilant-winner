import { useState, useEffect, MouseEvent } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';
import Image from 'next/image';
import LoginIllustrator from '@/assets/svg/login.svg';

export default function Login() {
	const router = useRouter();
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	useEffect(() => {
		if (isLoggedIn) {
			router.push('/dashboard');
		}
	}, [isLoggedIn, router]);

	const handleLogin = (e: MouseEvent<HTMLButtonElement>) => {
		setIsLoading(true);
		setIsLoggedIn(true);
		setIsLoading(false);
	};
	return (
		<>
			<Loader isLoading={isLoading} fullScreen>
				<main className="h-screen w-screen grid place-items-center md:place-content-center bg-background">
					<section className="w-full md:grid md:grid-cols-2 lg:rounded-lg md:m-auto md:shadow-lg">
						<div className="text-center hidden md:flex md:flex-col md:items-center p-16 bg-secondary">
							<Image src={LoginIllustrator} width={400} alt="login" />
						</div>
						<div className="w-4/5 md:w-2/3 mx-auto md:self-center">
							<div>
								<h1 className="text-3xl text-center font-bold mb-16 text-primary">Login</h1>
							</div>
							<div className="mb-8">
								<input
									type="tel"
									id="phone"
									className="w-full text-xl p-2 grow focus:outline-none focus:border-b-2 border-b border-b-primary"
									placeholder="Email/Phone"
								/>
							</div>
							<div className="relative">
								<input
									type={showPassword ? 'text' : 'password'}
									id="password"
									className="w-full text-xl p-2 grow focus:outline-none focus:border-b-2 border-b border-b-primary"
									placeholder="Password"
								/>
								{showPassword ? (
									<FaEyeSlash
										title="show password"
										role="button"
										className="absolute right-4 bottom-1/2 translate-y-1/2"
										onClick={() => setShowPassword(false)}
									/>
								) : (
									<FaEye
										role="button"
										title="show password"
										className="absolute right-4 bottom-1/2 translate-y-1/2"
										onClick={() => setShowPassword(true)}
									/>
								)}
							</div>
							<div className="pt-2 text-end">
								<small role="button" className="text-sky-600 font-semibold">
									Forgot Password?
								</small>
							</div>
							<div className="pt-2 flex items-center">
								<input type="checkbox" id="remember" className="mr-2" />
								<label htmlFor="remember" role="button" className="font-semibold text-slate-600">
									Remember Me
								</label>
							</div>
							<div className="my-4 h-1 w-full" />
							<div className="flex justify-center">
								<button
									className="text-xl text-center rounded-full py-2 px-16 bg-primary text-white transition-all duration-150 mb-2"
									onClick={handleLogin}
								>
									Log In
								</button>
							</div>
						</div>
					</section>
				</main>
			</Loader>
		</>
	);
}
