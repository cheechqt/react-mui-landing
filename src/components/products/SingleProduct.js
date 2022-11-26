import { Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductFavButton,
  ProductImage,
  ProductAddToCart,
} from "styles/products";
import ProductMeta from "./ProductMeta";
import useDialogModal from "hooks/useDialogModal";
import ProductDetail from "components/productDetail";

export default function SingleProduct({ product, matches }) {
  const [
    ProductDetailDialog,
    showProductDetailDialog,
    closeProductDetailDialog,
  ] = useDialogModal(ProductDetail);

  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
        <ProductActionsWrapper>
          <Stack direction="row">
            <ProductFavButton isFav={0}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductAddToCart variant="container">Add to cart</ProductAddToCart>
      <ProductDetailDialog product={product} />
    </>
  );
}
