import React from 'react';
import {IndexRoute, Route} from 'react-router';
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';
import {
    App,
    Chat,
    Home,
    Widgets,
    About,
    Login,
    LoginSuccess,
    Survey,
    NotFound,
    Pagination,
    Hello,
    Product,
    CustomerOrder,
    Customer,
    AddNewCustomAttribute,
    AddGwpByExcel,
    Order,
    OrderDetailCancelDetail,
    AccountEdit,
    AccountSetting,
    ProductBestSeller,
    ProductExclusive,
    ProductManageCustomAttribute,
    ProductHotItem,
    AddParentProduct,
    OrderDetailEditDetail,
    AddProduct,
    Marketing,
    MarketingAddNewGwp,
    MarketingAddNewCampaign,
    MasterBrandAndMember,
    MarketingCampaignInfo,
    GetDiscountAmountOff,
    BuyItem,
    DiscountPercentOff,
    BuyFirststTime,
    SpecificGroup,
    AddNewCartRuleByPercent,
    AddNewCartRuleByAmount,
    GwpBuyAmount,
    GwpBuyAny,
    AddNewCartRule,
    ShippingGlobalFeeFreeCountry,
    ShippingGlobalFeeWithShippingFee,
    AddNewShippingFeeGlobal,
    GetFreeShippingFee,

  } from 'containers';

export default (store) => {
  const requireLogin = (nextState, replace, cb) => {
    function checkAuth() {
      const { auth: { user }} = store.getState();
      if (!user) {
        // oops, not logged in, so can't be here!
        replace('/');
      }
      cb();
    }

    if (!isAuthLoaded(store.getState())) {
      store.dispatch(loadAuth()).then(checkAuth);
    } else {
      checkAuth();
    }
  };

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Routes requiring login */ }
      <Route onEnter={requireLogin}>
        <Route path="chat" component={Chat}/>
        <Route path="loginSuccess" component={LoginSuccess}/>
      </Route>

      { /* Routes */ }
      <Route path="about" component={About}/>
      <Route path="login" component={Login}/>
      <Route path="pagination" component={Pagination}/>
      <Route path="survey" component={Survey}/>
      <Route path="widgets" component={Widgets}/>
      <Route path="hello" component={Hello}/>
      <Route path="product" component={Product}/>
      <Route path="product/exclusive" component={ProductExclusive}/>
      <Route path="product/bestseller" component={ProductBestSeller}/>
      <Route path="product/hotitem" component={ProductHotItem}/>
      <Route path="customer" component={Customer}/>
      <Route path="customer/order" component={CustomerOrder}/>
      <Route path="customattribute" component={AddNewCustomAttribute}/>
      <Route path="addgwpbyexcel" component={AddGwpByExcel}/>
      <Route path="orders" component={Order}/>
      <Route path="orders/canceldetail" component={OrderDetailCancelDetail}/>
      <Route path="accountsetting" component={AccountSetting}/>
      <Route path="accountedit" component={AccountEdit}/>
      <Route path="product/managecustomattribute" component={ProductManageCustomAttribute}/>
      <Route path="parentproduct/add" component={AddParentProduct}/>
      <Route path="orderdetailcanceldetai/edit" component={OrderDetailEditDetail}/>
      <Route path="marketing/addnewgwp" component={MarketingAddNewGwp}/>
      <Route path="product/add" component={AddProduct}/>
      <Route path="marketing" component={Marketing}/>
      <Route path="marketing/addnewcampaign" component={MarketingAddNewCampaign}/>
      <Route path="marketing/masterbandandmember" component={MasterBrandAndMember}/>
      <Route path="marketing/setcampaign" component={MarketingAddNewCampaign}/>
      <Route path="marketing/campaign/info" component={MarketingCampaignInfo}/>
      <Route path="marketing/addnewcampaign/getdiscountamountoff" component={GetDiscountAmountOff}/>
      <Route path="marketing/addnewcampaign/buyitem" component={BuyItem}/>
      <Route path="marketing/addnewcampaign/discountpercentoff" component={DiscountPercentOff}/>
      <Route path="marketing/addnewcampaign/buyfirststtime" component={BuyFirststTime}/>
      <Route path="marketing/specificgroup" component={SpecificGroup}/>
      <Route path="marketing/addnewcartrulebypercent" component={AddNewCartRuleByPercent}/>
      <Route path="marketing/gwp/buyamount" component={GwpBuyAmount}/>
      <Route path="marketing/gwp/buyany" component={GwpBuyAny}/>
      <Route path="marketing/addnewcartrule" component={AddNewCartRule}/>
      <Route path="marketing/addnewcartrulebyamount" component={AddNewCartRuleByAmount}/>
      <Route path="marketing/shippingglobalfeefreecountry" component={ShippingGlobalFeeFreeCountry}/>
      <Route path="marketing/shippingglobalfeefreecountry" component={ShippingGlobalFeeFreeCountry}/>
      <Route path="marketing/shippingglobalfeewithshippingfee" component={ShippingGlobalFeeWithShippingFee}/>
      <Route path="marketing/addnewcampaignbyamount" component={AddNewCampaignByAmount}/>
      <Route path="marketing/addnewshippingfeeglobal" component={AddNewShippingFeeGlobal}/>
      <Route path="marketing/getfreeshippingfee" component={GetFreeShippingFee}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
