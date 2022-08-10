import { CSSProperties } from "react";
import { ImageProps } from "./../components/ProductImage";
import { ButtonsProps } from "./../components/ProductsButtons";
import { TitleProps } from "../components/ProductTitle";

export interface ProductCardProps {
	product: Product;
	// children?: ReactElement | ReactElement[];
	children: (args: ProductCardHandlers) => JSX.Element;
	className?: string;
	style?: CSSProperties;
	onChange?: (arg: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
}

export interface Product {
	id: string;
	title: string;
	img?: string;
}

export interface ProductContextProps {
	counter: number;
	maxCount?: number;
	product: Product;
	increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
	({ children, product }: ProductCardProps): JSX.Element;
	Title: (Props: TitleProps) => JSX.Element;
	Image: (Props: ImageProps) => JSX.Element;
	Buttons: (Props: ButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
	product: Product;
	count: number;
}

export interface ProductInCart extends Product {
	count: number;
}

export interface InitialValues {
	count?: number;
	maxCount?: number;
}

export interface ProductCardHandlers{
	count: number;
	isMaxCountReached: boolean;
	maxCount?: number;
	product: Product;

	increaseBy: (value: number) => void;
	reset: () => void;
}