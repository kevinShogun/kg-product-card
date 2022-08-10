
# DO-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Kevin García

## Ejemplo

```
  import{ProductCard, ProductImage, ProductTitle, ProductButtons} from 'do-product-card';
```

```
<ProductCard
	product={p}
	style={{
		margin: "0 10px",
	}}
	initialValues={{
		count: 5,
		// maxCount: 10,
	}}
>
	{({ reset, increaseBy, isMaxCountReached, count }) => (
		<>
			<ProductImage/>
			<ProductTitle />
			<ProductsButtons />
			
		</>
	)}
</ProductCard>
```