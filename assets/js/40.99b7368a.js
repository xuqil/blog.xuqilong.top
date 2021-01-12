(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{421:function(e,t,r){"use strict";r.r(t);var a=r(11),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"测试中"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#测试中"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#testing",target:"_blank",rel:"noopener noreferrer"}},[e._v("测试中"),r("OutboundLink")],1)]),e._v(" "),r("blockquote",[r("p",[e._v("没有测试的代码按设计被破坏。")]),e._v(" "),r("p",[e._v("— "),r("a",{attrs:{href:"https://jacobian.org/writing/django-apps-with-buildout/#s-create-a-test-wrapper",target:"_blank",rel:"noopener noreferrer"}},[e._v("雅各布·卡普兰·莫斯"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("REST框架包括一些帮助程序类，这些类扩展了Django现有的测试框架，并改善了对发出API请求的支持。")]),e._v(" "),r("h1",{attrs:{id:"apirequestfactory"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#apirequestfactory"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#apirequestfactory",target:"_blank",rel:"noopener noreferrer"}},[e._v("APIRequestFactory"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("扩展"),r("a",{attrs:{href:"https://docs.djangoproject.com/en/stable/topics/testing/advanced/#django.test.client.RequestFactory",target:"_blank",rel:"noopener noreferrer"}},[e._v("Django的现有"),r("code",[e._v("RequestFactory")]),e._v("类"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("h2",{attrs:{id:"创建测试请求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建测试请求"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#creating-test-requests",target:"_blank",rel:"noopener noreferrer"}},[e._v("创建测试请求"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("本"),r("code",[e._v("APIRequestFactory")]),e._v("类支持几乎相同的API来Django的标准"),r("code",[e._v("RequestFactory")]),e._v("类。这意味着，标准"),r("code",[e._v(".get()")]),e._v("，"),r("code",[e._v(".post()")]),e._v("，"),r("code",[e._v(".put()")]),e._v("，"),r("code",[e._v(".patch()")]),e._v("，"),r("code",[e._v(".delete()")]),e._v("，"),r("code",[e._v(".head()")]),e._v("和"),r("code",[e._v(".options()")]),e._v("方法都是可用的。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("from rest_framework.test import APIRequestFactory\n\n# Using the standard RequestFactory API to create a form POST request\nfactory = APIRequestFactory()\nrequest = factory.post('/notes/', {'title': 'new idea'})\n")])])]),r("h4",{attrs:{id:"使用format参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用format参数"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#using-the-format-argument",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用"),r("code",[e._v("format")]),e._v("参数"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("它创建一个请求体的方法，例如"),r("code",[e._v("post")]),e._v("，"),r("code",[e._v("put")]),e._v("和"),r("code",[e._v("patch")]),e._v("，包括"),r("code",[e._v("format")]),e._v("参数，该参数可以很容易地生成使用除多部分形式的数据以外的内容类型的请求。例如：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# Create a JSON POST request\nfactory = APIRequestFactory()\nrequest = factory.post('/notes/', {'title': 'new idea'}, format='json')\n")])])]),r("p",[e._v("默认情况下，可用格式为"),r("code",[e._v("'multipart'")]),e._v("和"),r("code",[e._v("'json'")]),e._v("。为了与Django现有兼容，"),r("code",[e._v("RequestFactory")]),e._v("默认格式为"),r("code",[e._v("'multipart'")]),e._v("。")]),e._v(" "),r("p",[e._v("要支持更多的请求格式集或更改默认格式，"),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#configuration",target:"_blank",rel:"noopener noreferrer"}},[e._v("请参阅“配置”部分"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("h4",{attrs:{id:"明确编码请求主体"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#明确编码请求主体"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#explicitly-encoding-the-request-body",target:"_blank",rel:"noopener noreferrer"}},[e._v("明确编码请求主体"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("如果需要显式编码请求正文，可以通过设置"),r("code",[e._v("content_type")]),e._v("标志来进行编码。例如：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("request = factory.post('/notes/', json.dumps({'title': 'new idea'}), content_type='application/json')\n")])])]),r("h4",{attrs:{id:"使用表格数据进行put和patch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用表格数据进行put和patch"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#put-and-patch-with-form-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用表格数据进行PUT和PATCH"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("值得注意的是Django "),r("code",[e._v("RequestFactory")]),e._v("和REST框架之间的区别"),r("code",[e._v("APIRequestFactory")]),e._v("是，多部分表单数据将被编码为just以外的方法"),r("code",[e._v(".post()")]),e._v("。")]),e._v(" "),r("p",[e._v("例如，使用"),r("code",[e._v("APIRequestFactory")]),e._v("，您可以发出表单PUT请求，如下所示：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("factory = APIRequestFactory()\nrequest = factory.put('/notes/547/', {'title': 'remember to email dave'})\n")])])]),r("p",[e._v("使用Django的"),r("code",[e._v("RequestFactory")]),e._v("，您需要自己对数据进行显式编码：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("from django.test.client import encode_multipart, RequestFactory\n\nfactory = RequestFactory()\ndata = {'title': 'remember to email dave'}\ncontent = encode_multipart('BoUnDaRyStRiNg', data)\ncontent_type = 'multipart/form-data; boundary=BoUnDaRyStRiNg'\nrequest = factory.put('/notes/547/', content, content_type=content_type)\n")])])]),r("h2",{attrs:{id:"强制认证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#强制认证"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#forcing-authentication",target:"_blank",rel:"noopener noreferrer"}},[e._v("强制认证"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("使用请求工厂直接测试视图时，通常能够直接对请求进行身份验证，而不必构造正确的身份验证凭据，这通常很方便。")]),e._v(" "),r("p",[e._v("要强制验证请求，请使用"),r("code",[e._v("force_authenticate()")]),e._v("方法。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("from rest_framework.test import force_authenticate\n\nfactory = APIRequestFactory()\nuser = User.objects.get(username='olivia')\nview = AccountDetail.as_view()\n\n# Make an authenticated request to the view...\nrequest = factory.get('/accounts/django-superstars/')\nforce_authenticate(request, user=user)\nresponse = view(request)\n")])])]),r("p",[e._v("该方法的签名为"),r("code",[e._v("force_authenticate(request, user=None, token=None)")]),e._v("。进行呼叫时，可以设置用户和令牌中的一个或两个。")]),e._v(" "),r("p",[e._v("例如，当使用令牌强制进行身份验证时，您可能会执行以下操作：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("user = User.objects.get(username='olivia')\nrequest = factory.get('/accounts/django-superstars/')\nforce_authenticate(request, user=user, token=user.auth_token)\n")])])]),r("hr"),e._v(" "),r("p",[r("strong",[e._v("注意")]),e._v("："),r("code",[e._v("force_authenticate")]),e._v("直接设置"),r("code",[e._v("request.user")]),e._v("为内存中的"),r("code",[e._v("user")]),e._v("实例。如果要在"),r("code",[e._v("user")]),e._v("更新保存"),r("code",[e._v("user")]),e._v("状态的多个测试中重复使用同一实例，则可能需要"),r("a",{attrs:{href:"https://docs.djangoproject.com/en/1.11/ref/models/instances/#django.db.models.Model.refresh_from_db",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("refresh_from_db()")]),r("OutboundLink")],1),e._v("在测试之间调用。")]),e._v(" "),r("hr"),e._v(" "),r("p",[r("strong",[e._v("注意")]),e._v("：使用时"),r("code",[e._v("APIRequestFactory")]),e._v("，返回的对象是Django的standard "),r("code",[e._v("HttpRequest")]),e._v("，而不是REST框架的"),r("code",[e._v("Request")]),e._v("对象，该对象仅在调用视图后才生成。")]),e._v(" "),r("p",[e._v("这意味着直接在请求对象上设置属性可能并不总是具有预期的效果。例如，"),r("code",[e._v(".token")]),e._v("直接设置将无效，而"),r("code",[e._v(".user")]),e._v("直接设置仅在使用会话身份验证时才有效。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# Request will only authenticate if `SessionAuthentication` is in use.\nrequest = factory.get('/accounts/django-superstars/')\nrequest.user = user\nresponse = view(request)\n")])])]),r("hr"),e._v(" "),r("h2",{attrs:{id:"强制csrf验证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#强制csrf验证"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#forcing-csrf-validation",target:"_blank",rel:"noopener noreferrer"}},[e._v("强制CSRF验证"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("默认情况下，使用创建的请求"),r("code",[e._v("APIRequestFactory")]),e._v("在传递到REST框架视图时将不应用CSRF验证。如果需要显式打开CSRF验证，则可以通过"),r("code",[e._v("enforce_csrf_checks")]),e._v("在实例化工厂时设置标志来进行。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("factory = APIRequestFactory(enforce_csrf_checks=True)\n")])])]),r("hr"),e._v(" "),r("p",[r("strong",[e._v("注意")]),e._v("：值得注意的是，Django的标准"),r("code",[e._v("RequestFactory")]),e._v("不需要包含此选项，因为使用常规Django时，CSRF验证在中间件中进行，而中间件在直接测试视图时不会运行。使用REST框架时，CSRF验证在视图内部进行，因此请求工厂需要禁用视图级CSRF检查。")]),e._v(" "),r("hr"),e._v(" "),r("h1",{attrs:{id:"api客户端"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api客户端"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#apiclient",target:"_blank",rel:"noopener noreferrer"}},[e._v("API客户端"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("扩展"),r("a",{attrs:{href:"https://docs.djangoproject.com/en/stable/topics/testing/tools/#the-test-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("Django的现有"),r("code",[e._v("Client")]),e._v("类"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("h2",{attrs:{id:"发出请求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#发出请求"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#making-requests",target:"_blank",rel:"noopener noreferrer"}},[e._v("发出请求"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("本"),r("code",[e._v("APIClient")]),e._v("类支持相同的请求接口Django的标准"),r("code",[e._v("Client")]),e._v("类。这意味着，标准"),r("code",[e._v(".get()")]),e._v("，"),r("code",[e._v(".post()")]),e._v("，"),r("code",[e._v(".put()")]),e._v("，"),r("code",[e._v(".patch()")]),e._v("，"),r("code",[e._v(".delete()")]),e._v("，"),r("code",[e._v(".head()")]),e._v("和"),r("code",[e._v(".options()")]),e._v("方法都是可用的。例如：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("from rest_framework.test import APIClient\n\nclient = APIClient()\nclient.post('/notes/', {'title': 'new idea'}, format='json')\n")])])]),r("p",[e._v("要支持更多的请求格式集或更改默认格式，"),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#configuration",target:"_blank",rel:"noopener noreferrer"}},[e._v("请参阅“配置”部分"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("h2",{attrs:{id:"验证中"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#验证中"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#authenticating",target:"_blank",rel:"noopener noreferrer"}},[e._v("验证中"),r("OutboundLink")],1)]),e._v(" "),r("h4",{attrs:{id:"login-kwargs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#login-kwargs"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#loginkwargs",target:"_blank",rel:"noopener noreferrer"}},[e._v(".login（** kwargs）"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("该"),r("code",[e._v("login")]),e._v("方法的功能与Django的常规"),r("code",[e._v("Client")]),e._v("类完全相同。这样，您就可以针对包含的任何视图对请求进行身份验证"),r("code",[e._v("SessionAuthentication")]),e._v("。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# Make all requests in the context of a logged in session.\nclient = APIClient()\nclient.login(username='lauren', password='secret')\n")])])]),r("p",[e._v("要注销，请"),r("code",[e._v("logout")]),e._v("照常调用该方法。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# Log out\nclient.logout()\n")])])]),r("p",[e._v("该"),r("code",[e._v("login")]),e._v("方法适用于测试使用会话身份验证的API，例如包含与API进行AJAX交互的网站。")]),e._v(" "),r("h4",{attrs:{id:"credentials-kwargs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#credentials-kwargs"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#credentialskwargs",target:"_blank",rel:"noopener noreferrer"}},[e._v(".credentials（** kwargs）"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("该"),r("code",[e._v("credentials")]),e._v("方法可用于设置标头，然后测试客户端会将其包含在所有后续请求中。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("from rest_framework.authtoken.models import Token\nfrom rest_framework.test import APIClient\n\n# Include an appropriate `Authorization:` header on all requests.\ntoken = Token.objects.get(user__username='lauren')\nclient = APIClient()\nclient.credentials(HTTP_AUTHORIZATION='Token ' + token.key)\n")])])]),r("p",[e._v("请注意，"),r("code",[e._v("credentials")]),e._v("第二次调用将覆盖所有现有凭据。您可以通过不带任何参数的方法来取消设置任何现有的凭据。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# Stop including any credentials\nclient.credentials()\n")])])]),r("p",[e._v("该"),r("code",[e._v("credentials")]),e._v("方法适用于测试需要身份验证标头的API，例如基本身份验证，OAuth1a和OAuth2身份验证以及简单令牌身份验证方案。")]),e._v(" "),r("h4",{attrs:{id:"force-authenticate-用户-无-令牌-无"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#force-authenticate-用户-无-令牌-无"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#force_authenticateusernone-tokennone",target:"_blank",rel:"noopener noreferrer"}},[e._v(".force_authenticate（用户=无，令牌=无）"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("有时，您可能希望完全绕过身份验证，并强制将测试客户端的所有请求自动视为已身份验证。")]),e._v(" "),r("p",[e._v("如果您正在测试API但又不想构造有效的身份验证凭据来发出测试请求，则这可能是一个有用的快捷方式。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("user = User.objects.get(username='lauren')\nclient = APIClient()\nclient.force_authenticate(user=user)\n")])])]),r("p",[e._v("要取消对后续请求的"),r("code",[e._v("force_authenticate")]),e._v("身份验证，请调用将用户和/或令牌设置为"),r("code",[e._v("None")]),e._v("。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("client.force_authenticate(user=None)\n")])])]),r("h2",{attrs:{id:"csrf验证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#csrf验证"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#csrf-validation",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSRF验证"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("默认情况下，使用时不应用CSRF验证"),r("code",[e._v("APIClient")]),e._v("。如果需要显式启用CSRF验证，则可以通过"),r("code",[e._v("enforce_csrf_checks")]),e._v("在实例化客户端时设置标志来实现。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("client = APIClient(enforce_csrf_checks=True)\n")])])]),r("p",[e._v("与往常一样，CSRF验证仅适用于任何经过会话身份验证的视图。这意味着CSRF验证仅在通过调用登录了客户端后才会发生"),r("code",[e._v("login()")]),e._v("。")]),e._v(" "),r("hr"),e._v(" "),r("h1",{attrs:{id:"requestsclient"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requestsclient"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#requestsclient",target:"_blank",rel:"noopener noreferrer"}},[e._v("RequestsClient"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("REST框架还包括一个客户端，用于使用流行的Python库与您的应用程序进行交互"),r("code",[e._v("requests")]),e._v("。这在以下情况下可能有用：")]),e._v(" "),r("ul",[r("li",[e._v("您期望主要通过另一个Python服务与API进行接口，并希望在与客户端将看到的相同级别上测试服务。")]),e._v(" "),r("li",[e._v("您希望以这样的方式编写测试，使其也可以在暂存或实时环境中运行。（请参见下面的“实时测试”。）")])]),e._v(" "),r("p",[e._v("这将显示与您直接使用请求会话完全相同的界面。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("from rest_framework.test import RequestsClient\n\nclient = RequestsClient()\nresponse = client.get('http://testserver/users/')\nassert response.status_code == 200\n")])])]),r("p",[e._v("请注意，请求客户端要求您传递完全限定的URL。")]),e._v(" "),r("h2",{attrs:{id:"requestsclient并使用数据库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requestsclient并使用数据库"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#requestsclient-and-working-with-the-database",target:"_blank",rel:"noopener noreferrer"}},[e._v("RequestsClient并使用数据库"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("的"),r("code",[e._v("RequestsClient")]),e._v("，如果你想编写测试，是专为与服务界面交互类是有用的。这比使用标准Django测试客户端要严格一些，因为这意味着所有交互都应通过API进行。")]),e._v(" "),r("p",[e._v("如果您正在使用"),r("code",[e._v("RequestsClient")]),e._v("，则需要确保测试设置和结果断言是作为常规API调用执行的，而不是直接与数据库模型进行交互。例如，与其检查"),r("code",[e._v("Customer.objects.count() == 3")]),e._v("您将列出客户终结点，并确保它包含三个记录，而不是检查。")]),e._v(" "),r("h2",{attrs:{id:"标头和身份验证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#标头和身份验证"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#headers-authentication",target:"_blank",rel:"noopener noreferrer"}},[e._v("标头和身份验证"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("可以使用与"),r("a",{attrs:{href:"http://docs.python-requests.org/en/master/user/advanced/#session-objects",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用标准"),r("code",[e._v("requests.Session")]),e._v("实例"),r("OutboundLink")],1),e._v("相同的方式来提供自定义标头和身份验证凭据。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("from requests.auth import HTTPBasicAuth\n\nclient.auth = HTTPBasicAuth('user', 'pass')\nclient.headers.update({'x-test': 'true'})\n")])])]),r("h2",{attrs:{id:"csrf"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#csrf",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSRF"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("如果你使用的"),r("code",[e._v("SessionAuthentication")]),e._v("，那么你就需要包括令牌任何一个CSRF "),r("code",[e._v("POST")]),e._v("，"),r("code",[e._v("PUT")]),e._v("，"),r("code",[e._v("PATCH")]),e._v("或"),r("code",[e._v("DELETE")]),e._v("请求。")]),e._v(" "),r("p",[e._v("您可以按照基于JavaScript的客户端将使用的相同流程进行操作。首先发出"),r("code",[e._v("GET")]),e._v("请求以获取CRSF令牌，然后在随后的请求中出示该令牌。")]),e._v(" "),r("p",[e._v("例如...")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("client = RequestsClient()\n\n# Obtain a CSRF token.\nresponse = client.get('http://testserver/homepage/')\nassert response.status_code == 200\ncsrftoken = response.cookies['csrftoken']\n\n# Interact with the API.\nresponse = client.post('http://testserver/organisations/', json={\n    'name': 'MegaCorp',\n    'status': 'active'\n}, headers={'X-CSRFToken': csrftoken})\nassert response.status_code == 200\n")])])]),r("h2",{attrs:{id:"现场测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#现场测试"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#live-tests",target:"_blank",rel:"noopener noreferrer"}},[e._v("现场测试"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("通过仔细使用，"),r("code",[e._v("RequestsClient")]),e._v("和"),r("code",[e._v("CoreAPIClient")]),e._v("提供了编写测试用例的能力，这些用例可以在开发中运行，也可以直接在登台服务器或生产环境中运行。")]),e._v(" "),r("p",[e._v("使用此样式创建一些核心功能的基本测试是验证实时服务的有效方法。这样做可能需要仔细注意设置和拆卸，以确保测试以不会直接影响客户数据的方式运行。")]),e._v(" "),r("hr"),e._v(" "),r("h1",{attrs:{id:"coreapiclient"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#coreapiclient"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#coreapiclient",target:"_blank",rel:"noopener noreferrer"}},[e._v("CoreAPIClient"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("CoreAPIClient允许您使用Python "),r("code",[e._v("coreapi")]),e._v("客户端库与您的API进行交互 。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# Fetch the API schema\nclient = CoreAPIClient()\nschema = client.get('http://testserver/schema/')\n\n# Create a new organisation\nparams = {'name': 'MegaCorp', 'status': 'active'}\nclient.action(schema, ['organisations', 'create'], params)\n\n# Ensure that the organisation exists in the listing\ndata = client.action(schema, ['organisations', 'list'])\nassert(len(data) == 1)\nassert(data == [{'name': 'MegaCorp', 'status': 'active'}])\n")])])]),r("h2",{attrs:{id:"标头和身份验证-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#标头和身份验证-2"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#headers-authentication_1",target:"_blank",rel:"noopener noreferrer"}},[e._v("标头和身份验证"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("自定义标头和身份验证的使用"),r("code",[e._v("CoreAPIClient")]),e._v("方式与相似"),r("code",[e._v("RequestsClient")]),e._v("。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("from requests.auth import HTTPBasicAuth\n\nclient = CoreAPIClient()\nclient.session.auth = HTTPBasicAuth('user', 'pass')\nclient.session.headers.update({'x-test': 'true'})\n")])])]),r("hr"),e._v(" "),r("h1",{attrs:{id:"api测试用例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api测试用例"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#api-test-cases",target:"_blank",rel:"noopener noreferrer"}},[e._v("API测试用例"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("REST框架包括以下测试用例类，它们反映了现有的Django测试用例类，但使用"),r("code",[e._v("APIClient")]),e._v("而不是Django的default "),r("code",[e._v("Client")]),e._v("。")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("APISimpleTestCase")])]),e._v(" "),r("li",[r("code",[e._v("APITransactionTestCase")])]),e._v(" "),r("li",[r("code",[e._v("APITestCase")])]),e._v(" "),r("li",[r("code",[e._v("APILiveServerTestCase")])])]),e._v(" "),r("h2",{attrs:{id:"例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#例"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#example",target:"_blank",rel:"noopener noreferrer"}},[e._v("例"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("您可以像使用常规Django测试用例类一样使用REST框架的任何用例类。该"),r("code",[e._v("self.client")]),e._v("属性将是一个"),r("code",[e._v("APIClient")]),e._v("实例。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("from django.urls import reverse\nfrom rest_framework import status\nfrom rest_framework.test import APITestCase\nfrom myproject.apps.core.models import Account\n\nclass AccountTests(APITestCase):\n    def test_create_account(self):\n        \"\"\"\n        Ensure we can create a new account object.\n        \"\"\"\n        url = reverse('account-list')\n        data = {'name': 'DabApps'}\n        response = self.client.post(url, data, format='json')\n        self.assertEqual(response.status_code, status.HTTP_201_CREATED)\n        self.assertEqual(Account.objects.count(), 1)\n        self.assertEqual(Account.objects.get().name, 'DabApps')\n")])])]),r("hr"),e._v(" "),r("h1",{attrs:{id:"urlpatternstestcase"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#urlpatternstestcase"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#urlpatternstestcase",target:"_blank",rel:"noopener noreferrer"}},[e._v("URLPatternsTestCase"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("REST框架还提供了一个测试用例类，"),r("code",[e._v("urlpatterns")]),e._v("以基于每个类进行隔离。请注意，这继承自Django的"),r("code",[e._v("SimpleTestCase")]),e._v("，很可能需要与另一个测试用例类混合使用。")]),e._v(" "),r("h2",{attrs:{id:"例-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#例-2"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#example_1",target:"_blank",rel:"noopener noreferrer"}},[e._v("例"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("from django.urls import include, path, reverse\nfrom rest_framework.test import APITestCase, URLPatternsTestCase\n\n\nclass AccountTests(APITestCase, URLPatternsTestCase):\n    urlpatterns = [\n        path('api/', include('api.urls')),\n    ]\n\n    def test_create_account(self):\n        \"\"\"\n        Ensure we can create a new account object.\n        \"\"\"\n        url = reverse('account-list')\n        response = self.client.get(url, format='json')\n        self.assertEqual(response.status_code, status.HTTP_200_OK)\n        self.assertEqual(len(response.data), 1)\n")])])]),r("hr"),e._v(" "),r("h1",{attrs:{id:"测试回应"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#测试回应"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#testing-responses",target:"_blank",rel:"noopener noreferrer"}},[e._v("测试回应"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"检查响应数据"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#检查响应数据"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#checking-the-response-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("检查响应数据"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("在检查测试响应的有效性时，通常更方便的方法是检查创建响应的数据，而不是检查完全呈现的响应。")]),e._v(" "),r("p",[e._v("例如，检查起来更容易"),r("code",[e._v("response.data")]),e._v("：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("response = self.client.get('/users/4/')\nself.assertEqual(response.data, {'id': 4, 'username': 'lauren'})\n")])])]),r("p",[e._v("而不是检查解析结果"),r("code",[e._v("response.content")]),e._v("：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("response = self.client.get('/users/4/')\nself.assertEqual(json.loads(response.content), {'id': 4, 'username': 'lauren'})\n")])])]),r("h2",{attrs:{id:"渲染回应"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#渲染回应"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#rendering-responses",target:"_blank",rel:"noopener noreferrer"}},[e._v("渲染回应"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("如果您直接使用来测试视图"),r("code",[e._v("APIRequestFactory")]),e._v("，则返回的响应将尚未呈现，因为模板响应的呈现是由Django的内部请求-响应周期执行的。为了进行访问"),r("code",[e._v("response.content")]),e._v("，您首先需要呈现响应。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("view = UserDetail.as_view()\nrequest = factory.get('/users/4')\nresponse = view(request, pk='4')\nresponse.render()  # Cannot access `response.content` without this.\nself.assertEqual(response.content, '{\"username\": \"lauren\", \"id\": 4}')\n")])])]),r("hr"),e._v(" "),r("h1",{attrs:{id:"组态"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组态"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#configuration",target:"_blank",rel:"noopener noreferrer"}},[e._v("组态"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"设置默认格式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设置默认格式"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#setting-the-default-format",target:"_blank",rel:"noopener noreferrer"}},[e._v("设置默认格式"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("可以使用"),r("code",[e._v("TEST_REQUEST_DEFAULT_FORMAT")]),e._v("设置键设置用于发出测试请求的默认格式。例如，要始终在默认情况下始终对测试请求使用JSON而不是标准的多部分表单请求，请在"),r("code",[e._v("settings.py")]),e._v("文件中设置以下内容：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("REST_FRAMEWORK = {\n    ...\n    'TEST_REQUEST_DEFAULT_FORMAT': 'json'\n}\n")])])]),r("h2",{attrs:{id:"设置可用格式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设置可用格式"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://www.django-rest-framework.org/api-guide/testing/#setting-the-available-formats",target:"_blank",rel:"noopener noreferrer"}},[e._v("设置可用格式"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("如果您需要使用multipart或json请求之外的其他测试请求，则可以通过设置"),r("code",[e._v("TEST_REQUEST_RENDERER_CLASSES")]),e._v("设置来进行。")]),e._v(" "),r("p",[e._v("例如，要增加对"),r("code",[e._v("format='html'")]),e._v("在测试请求中使用的支持，您的"),r("code",[e._v("settings.py")]),e._v("文件中可能会有类似的内容。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("REST_FRAMEWORK = {\n    ...\n    'TEST_REQUEST_RENDERER_CLASSES': [\n        'rest_framework.renderers.MultiPartRenderer',\n        'rest_framework.renderers.JSONRenderer',\n        'rest_framework.renderers.TemplateHTMLRenderer'\n    ]\n}\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);