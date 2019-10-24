import React from 'react';
// import ButtonComp from './Button';
import HeaderComp from './Header';
import NavBarComp from './NavBar';
import BreadCrumbComp from './BreadCrumb';
import ProductGridView from './ProductGridView';
import ProductListView from './ProductListView';
import ProductInlineCard from './ProductInlineCard';
import ProductSample from './ProductSample';
import FooterDiv from './Footer';
import {
    AddToCartBtn,
    AddToCartBtnSm,
    AddToFavoriteBtn,
    AddToFavoriteBtnSm,
    AddMoreBtn,
    AddVoucher,
    Checkbox,
    
} from './Forms';

import './components.scss'

export const Header = () => <HeaderComp/>;
export const NavBar = () => <NavBarComp/>;
export const BreadCrumb = () => <BreadCrumbComp/>;
export const AddToCartSm = ({ inCart, inForm }) => <AddToCartBtnSm inCart={inCart} inForm={inForm}/>;
export const AddToFavSm = ({ isLiked, inForm }) => <AddToFavoriteBtnSm isLiked={isLiked} inForm={inForm} />;
export const AddToCart = ({ inCart, inForm }) => <AddToCartBtn inCart={inCart} inForm={inForm}/>;
export const AddToFav = ({ isLiked, inForm }) => <AddToFavoriteBtn isLiked={isLiked} inForm={inForm} />;
export const AddMore = () => <AddMoreBtn/>;
export const VoucherInput = () => <AddVoucher/>;
export const CheckBox = () => <Checkbox/>;
export const ProductGrid = () => <ProductGridView/>;
export const ProductList = () => <ProductListView/>;
export const ProductInline = () => <ProductInlineCard/>;
export const ProductSampleCard = () => <ProductSample/>;
export const Footer = () => <FooterDiv/>;
