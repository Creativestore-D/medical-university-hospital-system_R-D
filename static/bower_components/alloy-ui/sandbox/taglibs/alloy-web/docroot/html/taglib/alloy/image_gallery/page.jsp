<%@ include file="init.jsp" %>

<alloy-util:component
	excludeAttributes="var,javaScriptAttributes,useMarkup,useJavaScript"
	tagPageContext="<%= pageContext %>"
	options="<%= _options %>"
	module="aui-image-viewer"
	name="ImageGallery"
/>