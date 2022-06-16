import css from './PostRequestSection.module.css';
import React from 'react';

const PostRequestSection = props =>
{
  return (
    <section class={css.dukeContractorThird}>
      <div class="container">
            <div class={css.requestCall}>
              <h3 class={css.smallHeading}>Request A Company</h3>
              <h4 class={css.middleHeading}>Post your Requirements and let</h4>
              <h4 class={css.middleHeading}>Clients find you.</h4>
              <div class={css.bannerBtn}>
                <a class={css.darkBtn} href="#">Post Request</a>
              </div>
            </div>
      </div>
    </section>
  );
};
 
export default PostRequestSection;