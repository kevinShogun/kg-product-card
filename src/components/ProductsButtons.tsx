import React, { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface ButtonsProps {
	className?: string;
	style?: CSSProperties;
}

export const ProductsButtons = ({ className, style }: ButtonsProps) => {
	const { counter, increaseBy, maxCount } = useContext(ProductContext);

	const isMaxReached = useCallback( () => !!maxCount && counter === maxCount, [counter, maxCount]);

	return (
		<div className={`${styles.buttonsContainer}  ${className}`} style={style}>
			<button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
				{" "}-{" "}
			</button>
			<label className={styles.countLabel}>{counter}</label>
			<button
				className={`${styles.buttonAdd} ${isMaxReached() && styles.disable}`}
				onClick={() => increaseBy(+1)}
			>
				{" "}+{" "}
			</button>
		</div>
	);
};
