import {withPluginApi} from 'discourse/lib/plugin-api';
import PageTracker from 'discourse/lib/page-tracker';

function __reload() {
  var arr  = document.getElementsByClassName("astrobanner-img");

  // skip if it's on root path (it try to load again for some reason when on /)
  if (window.location.pathname  === '/') {
    return;
  }

  if (arr && arr.length > 0) {
    arr[0].src = arr[0].src.split('?')[0] + '?' + new Date().getTime();
  }
}

function oldPluginCode() {
  PageTracker.current().on('change', __reload);
}

function initializeAstrobanner(api) {
  api.onPageChange(__reload);
}

export default {
  name: "apply-astrobanner",
  initialize(container) {

    const siteSettings = container.lookup('site-settings:main');
    const publisherCode = (siteSettings.astrobanner_site_id || '').trim();

    if (publisherCode.length) {
      withPluginApi('0.2', initializeAstrobanner, {noApi: oldPluginCode});
    }
  }
};
