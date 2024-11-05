# Creating a Virtual Network in Azure Portal

Follow these steps to create a virtual network in the Azure Portal:

## Step 1: Sign in to Azure Portal
1. Go to [Azure Portal](https://portal.azure.com).
2. Sign in with your Azure account credentials.

## Step 2: Navigate to Virtual Networks
1. In the left-hand menu, select **Create a resource**.
2. In the **Search the Marketplace** box, type **Virtual Network**.
3. Select **Virtual Network** from the search results.
4. Click **Create**.

## Step 3: Configure the Virtual Network
1. **Basics** tab:
    - **Subscription**: Select your subscription.
    - **Resource group**: Select an existing resource group or create a new one.
    - **Name**: Enter a name for your virtual network.
    - **Region**: Select the region where you want to create the virtual network.

2. **IP Addresses** tab:
    - **IPv4 address space**: Enter the address space in CIDR notation (e.g., `10.0.0.0/16`).
    - **Subnets**: Add one or more subnets by clicking **+ Add subnet** and providing a name and subnet address range.

3. **Security** tab:
    - Configure security settings as needed (e.g., DDoS protection, Firewall).

4. **Tags** tab:
    - Optionally, add tags to organize your resources.

5. **Review + create** tab:
    - Review your settings and click **Create**.

## Step 4: Verify the Virtual Network
1. Once the deployment is complete, navigate to **Resource groups**.
2. Select the resource group where you created the virtual network.
3. Verify that the virtual network and its subnets are listed.

Congratulations! You have successfully created a virtual network in Azure Portal.
