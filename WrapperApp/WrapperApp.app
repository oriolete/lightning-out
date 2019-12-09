<aura:application access="GLOBAL" extends="ltng:outApp" implements="ltng:allowGuestAccess">
    <ltng:require styles="{!$Resource.SLDS283 +
        '/styles/salesforce-lightning-design-system.css'}" />
    <aura:dependency resource="c:helloWorld" />
    <!--<aura:dependency resource="c:expenses"/>-->
    <aura:dependency resource="c:FlowC13" />
    <aura:dependency resource="c:FlowTest" />
    <aura:dependency resource="c:allContacts" />
</aura:application>