import React, { ReactElement, FC } from 'react';
import { VscLoading } from 'react-icons/vsc';

interface LoaderProps {
	isLoading: boolean;
	children: ReactElement;
	className?: string;
	color?: string;
	size?: string | undefined;
	fullScreen?: boolean;
}

const Loader: FC<LoaderProps> = ({
	children,
	isLoading,
	className,
	color = 'text-emerald-600',
	size,
	fullScreen = false,
}) => {
	if (isLoading) {
		return (
			<div
				className={[
					fullScreen ? 'w-screen h-screen grid place-content-center' : 'text-center flex justify-center py-4',
					className,
				].join(' ')}
			>
				<VscLoading className={['animate-spin', color, size ? size : fullScreen ? 'text-5xl' : 'text-2xl'].join(' ')} />
			</div>
		);
	}
	return children;
};

export default Loader;
