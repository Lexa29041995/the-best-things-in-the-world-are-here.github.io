/*=========CUSTOMERS=======*/

//GET FIRST 10 CUSTOMERS
{
    customers(first: 10) {
        edges {
            node {
                id
                displayName
            }
        }
    }
}

//GET CUSTOMER BY ID
{
    customer(id: "gid://shopify/Customer/4054691709088") {
        email
        firstName
        lastName
        defaultAddress {
            address1
            city
            province
            zip
            country
        }
    }
}

//UPDATE CUSTOMER INFO
mutation {
    customerUpdate(input: { id: "gid://shopify/Customer/4054691709088", tags: ["Test tag, New tag"] }) {
        customer {
            id
            tags
        }
    }
}

/*=========COLLECTIONS=======*/

//GET FIRST 10 COLLECTIONS
{
    collections(first: 10) {
        edges {
            node {
                id
                handle
            }
        }
    }
}

//GET COLLECTION BY ID
{
    collection(id: "gid://shopify/Collection/222172250272") {
        title
    }
}


/*=========SHOP DATA=======*/

{
    shop {
        name
        id
    }
}