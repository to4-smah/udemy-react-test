import gql from 'graphql-tag'

// お客様情報を取得
export const USER_GET_POFILE = gql`
    query{
        show{
            createdAt
            updatedAt
            sei
            seiKana
            mei
            meiKana
            gender
            birthDate
            phoneNumber
            id
            status
            name
            email
            last_login
            addresses{
                updatedAt
                id
                tag
                zipCode
                todouhuken
                sikuchouson
                tikubanchi
                tatemono
                residenceType{
                    name
                }
                parkingType{
                    name
                }
                ownedBy{
                    id
                    name
                }
            }
        }
    }
    `;

// 未発注
export const ESTIMATE_GET_LIST = gql`
    query{
        estimations(status: 0, first: 5){
            totalCount
            pageInfo{
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
            edges{
                node{
                    createdAt
                    createdBy{
                        name
                    }
                    updatedAt
                    updatedBy{
                        name
                    }
                    ownedBy{
                        name
                    }
                    position
                    id
                    status
                    title
                    key
                    description
                    issuedAt
                    expiredAt
                    issuedBy{
                        id
                        name
                    }
                    soldBy{
                       name
                    }
                    priceSale
                    priceNet
                    priceGross
                    workersCount
                    workersHours
                    calculatedAt
                    remarks{
                        totalCount
                        edges{
                            node{
                                note
                            }
                        }
                    }
                    attaches{
                        id
                        tag
                        attach{
                            id
                            status
                            key
                            description
                            mimeType
                            presindedUri
                        }
                    }
                }
            }
        }
    }
    `;

// 期限切れ
export const ESTIMATE_GET_TIMEOUT_LIST = gql`
    query{
        estimations(status: 1, first: 5){
            totalCount
            pageInfo{
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
            edges{
                node{
                    createdAt
                    createdBy{
                        name
                    }
                    updatedAt
                    updatedBy{
                        name
                    }
                    ownedBy{
                        name
                    }
                    position
                    id
                    status
                    title
                    key
                    description
                    issuedAt
                    expiredAt
                    issuedBy{
                        id
                        name
                    }
                    soldBy{
                       name
                    }
                    priceSale
                    priceNet
                    priceGross
                    workersCount
                    workersHours
                    calculatedAt
                    remarks{
                        totalCount
                        edges{
                            node{
                                note
                            }
                        }
                    }
                    attaches{
                        id
                        tag
                        attach{
                            id
                            status
                            key
                            description
                            mimeType
                            presindedUri
                        }
                    }
                }
            }
        }
    }
    `;

// キャンセル
export const ESTIMATE_GET_CANCEL_LIST = gql`
    query{
        estimations(status: 2, first: 5){
            totalCount
            pageInfo{
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
            edges{
                node{
                    createdAt
                    createdBy{
                        name
                    }
                    updatedAt
                    updatedBy{
                        name
                    }
                    ownedBy{
                        name
                    }
                    position
                    id
                    status
                    title
                    key
                    description
                    issuedAt
                    expiredAt
                    issuedBy{
                        id
                        name
                    }
                    soldBy{
                       name
                    }
                    priceSale
                    priceNet
                    priceGross
                    workersCount
                    workersHours
                    calculatedAt
                    remarks{
                        totalCount
                        edges{
                            node{
                                note
                            }
                        }
                    }
                    attaches{
                        id
                        tag
                        attach{
                            id
                            status
                            key
                            description
                            mimeType
                            presindedUri
                        }
                    }
                }
            }
        }
    }
    `;

// 発注済み
export const ESTIMATE_GET_ORDERED_LIST = gql`
    query{
        estimations(status: 9, first: 5){
            totalCount
            pageInfo{
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
            edges{
                node{
                    createdAt
                    createdBy{
                        name
                    }
                    updatedAt
                    updatedBy{
                        name
                    }
                    ownedBy{
                        name
                    }
                    position
                    id
                    status
                    title
                    key
                    description
                    issuedAt
                    expiredAt
                    issuedBy{
                        id
                        name
                    }
                    soldBy{
                       name
                    }
                    priceSale
                    priceNet
                    priceGross
                    workersCount
                    workersHours
                    calculatedAt
                    remarks{
                        totalCount
                        edges{
                            node{
                                note
                            }
                        }
                    }
                    attaches{
                        id
                        tag
                        attach{
                            id
                            status
                            key
                            description
                            mimeType
                            presindedUri
                        }
                    }
                }
            }
        }
    }
    `;

// 見積もりステータス 9(発注済み)に変更
export const ESTIMATE_REQUEST_STATUS = gql`
    mutation setStatus($key: String!) {
        setEstimationStatus(key: $key, status: 9){
            id
            status
            title
            key
        }
    }
    `;

// 見積もりステータス 2(キャンセル)に変更
export const ESTIMATE_CANCEL_REQUEST_STATUS = gql`
    mutation setStatus($key: String!) {
        setEstimationStatus(key: $key, status: 2){
            id
            status
            title
            key
        }
    }
    `;

export const USER_UPDATE_PROFILE = gql`
    mutation (
        $sei: String, 
        $seiKana: String, 
        $mei: String, 
        $meiKana: String, 
        $phoneNumber: String, 
        
    ) {
        update(input: {
            sei: $sei
            seiKana: $seiKana
            mei: $mei
            meiKana: $meiKana
            phoneNumber: $phoneNumber
        
        }){
            sei
            seiKana
            mei
            meiKana
            birthDate
            phoneNumber
            id
            name
            email
        }
    }
    `;