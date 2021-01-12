(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{420:function(e,r,t){"use strict";t.r(r);var a=t(11),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"返回网址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#返回网址"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/reverse/#returning-urls",target:"_blank",rel:"noopener noreferrer"}},[e._v("返回网址"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("将REST架构样式与其他基于网络的样式区分开的主要特征是它强调组件之间的统一接口。")]),e._v(" "),t("p",[e._v("— Roy Fielding，"),t("a",{attrs:{href:"https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm#sec_5_1_5",target:"_blank",rel:"noopener noreferrer"}},[e._v("架构风格和基于网络的软件架构设计"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("通常，最好从Web API返回绝对URI（例如）"),t("code",[e._v("http://example.com/foobar")]),e._v("，而不是返回相对URI（例如）"),t("code",[e._v("/foobar")]),e._v("。")]),e._v(" "),t("p",[e._v("这样做的好处是：")]),e._v(" "),t("ul",[t("li",[e._v("更明确。")]),e._v(" "),t("li",[e._v("它为您的API客户端减少了工作量。")]),e._v(" "),t("li",[e._v("在不具有本机URI类型的JSON之类的表示形式中找到字符串时，其含义没有任何歧义。")]),e._v(" "),t("li",[e._v("这样可以很轻松地完成诸如使用超链接标记HTML表示之类的事情。")])]),e._v(" "),t("p",[e._v("REST框架提供了两个实用程序功能，使从Web API返回绝对URI变得更加简单。")]),e._v(" "),t("p",[e._v("不需要使用它们，但是如果您这样做，则自描述API将能够为您自动超链接其输出，这使浏览API变得更加容易。")]),e._v(" "),t("h2",{attrs:{id:"相反"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相反"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/reverse/#reverse",target:"_blank",rel:"noopener noreferrer"}},[e._v("相反"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("strong",[e._v("签名：")]),e._v(" "),t("code",[e._v("reverse(viewname, *args, **kwargs)")])]),e._v(" "),t("p",[e._v("具有与相同的行为"),t("a",{attrs:{href:"https://docs.djangoproject.com/en/stable/topics/http/urls/#reverse",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("django.urls.reverse")]),t("OutboundLink")],1),e._v("，除了它返回完全限定的URL（使用请求确定主机和端口）。")]),e._v(" "),t("p",[e._v("您应该"),t("strong",[e._v("将请求作为")]),e._v("函数"),t("strong",[e._v("的关键字参数包括在内")]),e._v("，例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("from rest_framework.reverse import reverse\nfrom rest_framework.views import APIView\nfrom django.utils.timezone import now\n\nclass APIRootView(APIView):\n    def get(self, request):\n        year = now().year\n        data = {\n            ...\n            'year-summary-url': reverse('year-summary', args=[year], request=request)\n        }\n        return Response(data)\n")])])]),t("h2",{attrs:{id:"reverse-lazy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reverse-lazy"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/reverse/#reverse_lazy",target:"_blank",rel:"noopener noreferrer"}},[e._v("reverse_lazy"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("strong",[e._v("签名：")]),e._v(" "),t("code",[e._v("reverse_lazy(viewname, *args, **kwargs)")])]),e._v(" "),t("p",[e._v("具有与相同的行为"),t("a",{attrs:{href:"https://docs.djangoproject.com/en/stable/topics/http/urls/#reverse-lazy",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("django.urls.reverse_lazy")]),t("OutboundLink")],1),e._v("，除了它返回完全限定的URL（使用请求确定主机和端口）。")]),e._v(" "),t("p",[e._v("与"),t("code",[e._v("reverse")]),e._v("函数一样，您应将"),t("strong",[e._v("请求作为")]),e._v("函数"),t("strong",[e._v("的关键字参数包括在内")]),e._v("，例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("api_root = reverse_lazy('api-root', request=request)\n")])])])])}),[],!1,null,null,null);r.default=s.exports}}]);