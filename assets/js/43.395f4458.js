(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{424:function(t,e,s){"use strict";s.r(e);var a=s(11),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"基于类的视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于类的视图"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#class-based-views",target:"_blank",rel:"noopener noreferrer"}},[t._v("基于类的视图"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("Django的基于类的视图是对旧式视图的欢迎。")]),t._v(" "),s("p",[t._v("— "),s("a",{attrs:{href:"https://reinout.vanrees.org/weblog/2011/08/24/class-based-views-usage.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reinout van Rees"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("REST框架提供了一个"),s("code",[t._v("APIView")]),t._v("类，该类继承了Django的"),s("code",[t._v("View")]),t._v("类。")]),t._v(" "),s("p",[s("code",[t._v("APIView")]),t._v("类与常规"),s("code",[t._v("View")]),t._v("类在以下方面有所不同：")]),t._v(" "),s("ul",[s("li",[t._v("传递给处理程序方法的请求将是REST框架的"),s("code",[t._v("Request")]),t._v("实例，而不是Django的"),s("code",[t._v("HttpRequest")]),t._v("实例。")]),t._v(" "),s("li",[t._v("处理程序方法可能返回REST框架的"),s("code",[t._v("Response")]),t._v("而不是Django的"),s("code",[t._v("HttpResponse")]),t._v("。该视图将管理内容协商并在响应上设置正确的渲染器。")]),t._v(" "),s("li",[t._v("任何"),s("code",[t._v("APIException")]),t._v("异常都将被捕获并调解为适当的响应。")]),t._v(" "),s("li",[t._v("在将请求分派到处理程序方法之前，将对传入的请求进行身份验证并进行适当的权限和/或限制检查。")])]),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("APIView")]),t._v("该类与使用常规"),s("code",[t._v("View")]),t._v("类几乎相同，通常，传入的请求将分派到适当的处理程序方法，例如"),s("code",[t._v(".get()")]),t._v("或"),s("code",[t._v(".post()")]),t._v("。另外，可以在控制API策略各个方面的类上设置许多属性。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" rest_framework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("views "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" APIView\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" rest_framework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Response\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" rest_framework "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" authentication"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" permissions\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contrib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" User\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListUsers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("APIView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n    View to list all users in the system.\n\n    * Requires token authentication.\n    * Only admin users are able to access this view.\n    """')]),t._v("\n    authentication_classes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("authentication"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TokenAuthentication"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    permission_classes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("permissions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IsAdminUser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        Return a list of all users.\n        """')]),t._v("\n        usernames "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" user "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" User"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("all")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("usernames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("hr"),t._v(" "),s("p",[s("strong",[t._v("注")]),t._v("：完整的方法，属性，并与Django的REST框架的关系"),s("code",[t._v("APIView")]),t._v("，"),s("code",[t._v("GenericAPIView")]),t._v("各种"),s("code",[t._v("Mixins")]),t._v("，并且"),s("code",[t._v("Viewsets")]),t._v("可以初步复杂。除了此处的文档外，"),s("a",{attrs:{href:"http://www.cdrf.co/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Classy Django REST Framework"),s("OutboundLink")],1),t._v("资源还为每个Django REST Framework基于类的视图提供了可浏览的参考，以及完整的方法和属性。")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"api策略属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api策略属性"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#api-policy-attributes",target:"_blank",rel:"noopener noreferrer"}},[t._v("API策略属性"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("以下属性控制API视图的可插入方面。")]),t._v(" "),s("h3",{attrs:{id:"renderer-classes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#renderer-classes"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#renderer_classes",target:"_blank",rel:"noopener noreferrer"}},[t._v(".renderer_classes"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"parser-classes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parser-classes"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#parser_classes",target:"_blank",rel:"noopener noreferrer"}},[t._v(".parser_classes"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"authentication-classes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authentication-classes"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#authentication_classes",target:"_blank",rel:"noopener noreferrer"}},[t._v(".authentication_classes"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"throttle-classes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#throttle-classes"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#throttle_classes",target:"_blank",rel:"noopener noreferrer"}},[t._v(".throttle_classes"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"permission-classes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#permission-classes"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#permission_classes",target:"_blank",rel:"noopener noreferrer"}},[t._v(".permission_classes"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"content-negotiation-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content-negotiation-class"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#content_negotiation_class",target:"_blank",rel:"noopener noreferrer"}},[t._v(".content_negotiation_class"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"api策略实例化方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api策略实例化方法"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#api-policy-instantiation-methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("API策略实例化方法"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("REST框架使用以下方法来实例化各种可插拔API策略。您通常不需要重写这些方法。")]),t._v(" "),s("h3",{attrs:{id:"get-renderers-self"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-renderers-self"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#get_renderersself",target:"_blank",rel:"noopener noreferrer"}},[t._v(".get_renderers(self)"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"get-parsers-self"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-parsers-self"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#get_parsersself",target:"_blank",rel:"noopener noreferrer"}},[t._v(".get_parsers(self)"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"get-authenticators-self"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-authenticators-self"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#get_authenticatorsself",target:"_blank",rel:"noopener noreferrer"}},[t._v(".get_authenticators(self)"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"get-throttles-self"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-throttles-self"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#get_throttlesself",target:"_blank",rel:"noopener noreferrer"}},[t._v(".get_throttles(self)"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"get-permissions-self"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-permissions-self"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#get_permissionsself",target:"_blank",rel:"noopener noreferrer"}},[t._v(".get_permissions(self)"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"get-content-negotiator-self"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-content-negotiator-self"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#get_content_negotiatorself",target:"_blank",rel:"noopener noreferrer"}},[t._v(".get_content_negotiator(self)"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"get-exception-handler-self"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-exception-handler-self"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#get_exception_handlerself",target:"_blank",rel:"noopener noreferrer"}},[t._v(".get_exception_handler(self)"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"api策略实施方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api策略实施方法"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#api-policy-implementation-methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("API策略实施方法"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("在分派到处理程序方法之前，将调用以下方法。")]),t._v(" "),s("h3",{attrs:{id:"check-permissions-self-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-permissions-self-request"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#check_permissionsself-request",target:"_blank",rel:"noopener noreferrer"}},[t._v(".check_permissions(self, request)"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"check-throttles-self-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-throttles-self-request"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#check_throttlesself-request",target:"_blank",rel:"noopener noreferrer"}},[t._v(".check_throttles(self, request)"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"perform-content-negotiation-self-request-force-false"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#perform-content-negotiation-self-request-force-false"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#perform_content_negotiationself-request-forcefalse",target:"_blank",rel:"noopener noreferrer"}},[t._v(".perform_content_negotiation(self, request, force=False)"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"dispatch-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dispatch-方法"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#dispatch-methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dispatch 方法"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("视图的"),s("code",[t._v(".dispatch()")]),t._v("方法直接调用以下方法。这些执行需要之前或调用处理方法，如之后发生的任何动作"),s("code",[t._v(".get()")]),t._v("，"),s("code",[t._v(".post()")]),t._v("，"),s("code",[t._v("put()")]),t._v("，"),s("code",[t._v("patch()")]),t._v("和"),s("code",[t._v(".delete()")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"initial-self-request-args-kwargs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initial-self-request-args-kwargs"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#initialself-request-42args-kwargs",target:"_blank",rel:"noopener noreferrer"}},[t._v(".initial(self, request, *args, **kwargs)"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("执行在调用处理程序方法之前需要执行的所有操作。此方法用于强制执行权限和限制，并执行内容协商。")]),t._v(" "),s("p",[t._v("您通常不需要重写此方法。")]),t._v(" "),s("h3",{attrs:{id:"handle-exception-self-exc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handle-exception-self-exc"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#handle_exceptionself-exc",target:"_blank",rel:"noopener noreferrer"}},[t._v(".handle_exception(self, exc)"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("处理程序方法引发的任何异常都将传递给此方法，该方法将返回一个"),s("code",[t._v("Response")]),t._v("实例，或重新引发该异常。")]),t._v(" "),s("p",[t._v("默认实现处理的任何子类"),s("code",[t._v("rest_framework.exceptions.APIException")]),t._v("以及Django的"),s("code",[t._v("Http404")]),t._v("和"),s("code",[t._v("PermissionDenied")]),t._v("异常，并返回适当的错误响应。")]),t._v(" "),s("p",[t._v("如果您需要自定义错误响应，那么您的API返回的值应该子类化此方法。")]),t._v(" "),s("h3",{attrs:{id:"initialize-request-self-request-args-kwargs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initialize-request-self-request-args-kwargs"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#initialize_requestself-request-42args-kwargs",target:"_blank",rel:"noopener noreferrer"}},[t._v(".initialize_request(self, request, *args, **kwargs)"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("确保传递给处理程序方法的请求对象是的实例"),s("code",[t._v("Request")]),t._v("，而不是通常的Django "),s("code",[t._v("HttpRequest")]),t._v("。")]),t._v(" "),s("p",[t._v("您通常不需要重写此方法。")]),t._v(" "),s("h3",{attrs:{id:"finalize-response-self-request-response-args-kwargs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#finalize-response-self-request-response-args-kwargs"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#finalize_responseself-request-response-42args-kwargs",target:"_blank",rel:"noopener noreferrer"}},[t._v(".finalize_response(self, request, response, *args, **kwargs)"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("确保"),s("code",[t._v("Response")]),t._v("从处理程序方法返回的任何对象都将呈现为正确的内容类型，这由内容协商确定。")]),t._v(" "),s("p",[t._v("您通常不需要重写此方法。")]),t._v(" "),s("hr"),t._v(" "),s("h1",{attrs:{id:"基于函数的视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于函数的视图"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#function-based-views",target:"_blank",rel:"noopener noreferrer"}},[t._v("基于函数的视图"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("说[基于类的视图]始终是最佳解决方案，这是一个错误。")]),t._v(" "),s("p",[t._v("— "),s("a",{attrs:{href:"http://www.boredomandlaziness.org/2012/05/djangos-cbvs-are-not-mistake-but.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("尼克·科格兰"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("REST框架还允许您使用基于常规函数的视图。它提供了一组简单的装饰器，包装了基于函数的视图，以确保它们接收的实例"),s("code",[t._v("Request")]),t._v("（而不是通常的Django "),s("code",[t._v("HttpRequest")]),t._v("），并允许它们返回"),s("code",[t._v("Response")]),t._v("（而不是Django "),s("code",[t._v("HttpResponse")]),t._v("），并允许您配置如何处理请求。")]),t._v(" "),s("h2",{attrs:{id:"api-view"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-view"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#api_view",target:"_blank",rel:"noopener noreferrer"}},[t._v("@api_view（）"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("签名：")]),t._v(" "),s("code",[t._v("@api_view(http_method_names=['GET'])")])]),t._v(" "),s("p",[t._v("该功能的核心是"),s("code",[t._v("api_view")]),t._v("装饰器，该装饰器列出了视图应响应的HTTP方法的列表。例如，这是您编写一个非常简单的视图的方式，只需手动返回一些数据即可：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" rest_framework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decorators "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" api_view\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@api_view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("该视图将使用"),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/settings/",target:"_blank",rel:"noopener noreferrer"}},[t._v("设置中"),s("OutboundLink")],1),t._v("指定的默认渲染器，解析器，身份验证类等。")]),t._v(" "),s("p",[t._v("默认情况下，只"),s("code",[t._v("GET")]),t._v("接受方法。其他方法将响应“ 405方法不允许”。要更改此行为，请指定视图允许的方法，如下所示：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@api_view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Got some data!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"api策略装饰器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api策略装饰器"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#api-policy-decorators",target:"_blank",rel:"noopener noreferrer"}},[t._v("API策略装饰器"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("要覆盖默认设置，REST框架提供了一组其他装饰器，可以将其添加到视图中。这些必须在装饰器"),s("code",[t._v("@api_view")]),s("em",[t._v("之后")]),t._v("（下方）进行。例如，要创建使用"),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/throttling/",target:"_blank",rel:"noopener noreferrer"}},[t._v("throttle"),s("OutboundLink")],1),t._v(" 来确保特定用户每天只能调用一次的视图，请使用"),s("code",[t._v("@throttle_classes")]),t._v("装饰器，并传递油门类列表：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" rest_framework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decorators "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" api_view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" throttle_classes\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" rest_framework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("throttling "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" UserRateThrottle\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OncePerDayUserThrottle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UserRateThrottle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        rate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1/day'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@api_view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@throttle_classes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OncePerDayUserThrottle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello for today! See you tomorrow!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("这些装饰器对应于"),s("code",[t._v("APIView")]),t._v("如上所述在子类上设置的属性。")]),t._v(" "),s("p",[t._v("可用的装饰器是：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("@renderer_classes(...)")])]),t._v(" "),s("li",[s("code",[t._v("@parser_classes(...)")])]),t._v(" "),s("li",[s("code",[t._v("@authentication_classes(...)")])]),t._v(" "),s("li",[s("code",[t._v("@throttle_classes(...)")])]),t._v(" "),s("li",[s("code",[t._v("@permission_classes(...)")])])]),t._v(" "),s("p",[t._v("这些装饰器中的每一个都带有一个参数，该参数必须是类的列表或元组。")]),t._v(" "),s("h2",{attrs:{id:"视图架构装饰器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视图架构装饰器"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/views/#view-schema-decorator",target:"_blank",rel:"noopener noreferrer"}},[t._v("视图架构装饰器"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("要覆盖基于函数的视图的默认架构生成，可以使用"),s("code",[t._v("@schema")]),t._v("装饰器。这必须在装饰器"),s("code",[t._v("@api_view")]),s("em",[t._v("之后")]),t._v("（下方）进行。例如：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" rest_framework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decorators "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" api_view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" schema\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" rest_framework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("schemas "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" AutoSchema\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomAutoSchema")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AutoSchema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_link")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" base_url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# override view introspection here...")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@api_view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@schema")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CustomAutoSchema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello for today! See you tomorrow!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("该装饰器采用一个"),s("code",[t._v("AutoSchema")]),t._v("实例，一个"),s("code",[t._v("AutoSchema")]),t._v("子类实例或"),s("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/schemas/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Schemas文档"),s("OutboundLink")],1),s("code",[t._v("ManualSchema")]),t._v("中所述的实例。您可以通过以将视图从架构生成中排除。"),s("code",[t._v("None")])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@api_view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@schema")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Will not appear in schema!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);