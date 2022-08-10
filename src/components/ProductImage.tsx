import React, { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import noImg from "../assets/no-image.jpg";

export type ImageProps = {
	img?: string;
	className?: string;
	style?: CSSProperties;
};

export const ProductImage = ({ img = "", className, style }: ImageProps) => {
	const { product } = useContext(ProductContext);
	let imgShow: string;

	if (img) {
		imgShow = img;
	} else if (product.img) {
		imgShow = product.img;
	} else {
		imgShow = noImg;
	}

	return (
		<img
			src={imgShow}
			alt="product img"
			className={`${styles.productImg} ${className}`}
			style={style}
		/>
	);
};
