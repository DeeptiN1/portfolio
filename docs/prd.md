---
title: Product Requirements Document
nav_order: 4
---

# Product Requirements Document (PRD)
{: .no_toc }
This PRD is to develop inventory management features for a fictitious invoicing software called "SimpliCompense".

-----------------------------

## SimpliCompense’s Inventory Management product requirements document.

| **Scope**               | Creation and management of inventories and purchase orders
| **Target release date** | September 22, 2024                                                             |
| **Epic**                | SCE-49 - Inventory and purchase order creation and management                |
| **Document status**     | In Progress                                                                    |
| **Document owner**      | Michael Smith                                                                  |
| **Designers**           | Lily Peng, Nicholas Petrowsky                                                  |
| **Developers**          | Jaya Patel, Harris Okagawa, Lyra Garcia, Tim Sutton, Sunil Iyer, Mathew Nguyen |

## Background and goals

SimpliCompense’s invoicing software has around 8K active small business users. To retain current users and attract new users during the holiday season, SimpliCompense needs to provide capabilities to perform inventory and purchase order management functions. Therefore, one of the major goals for SimpliCompense’s Inventory Management product is to satisfy all the users’ needs of inventory and purchase order creation and management in an efficient and reliable way. 

## Requirements


| Title                                                    | Description                                                                          | Priority  | Acceptance Criteria                                                                            | Notes                                                                                              |
|:---------------------------------------------------------|:-------------------------------------------------------------------------------------|:----------|:-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| Create an item resource.                                 | The user creates an item resource to maintain an inventory of it.                    | Must-have | Item details are saved, the item is trackable in an inventory.                                 | By default, all created items are trackable in an inventory.                                       |
| Create an inventory of items.                            | The user sets the quantity of in-stock items.                                        | Must-have | The inventory dashboard displays the item ID, name, in-stock quantity and purchased quantity.  | The inventory list is sorted by item ID. The user can set other sorting orders and filters.        |
| Automatic inventory update based on purchases and sales. | The quantity of in-stock items is updated based on purchases and sales.              | Must-have | The inventory dashboard shows the updated number of in-stock items.                            |                                                                                                    |
| Purchase order creation.                                 | The user creates a purchase order.                                                   | Must-have | The purchase order is saved.                                                                   |
| Purchase order listing.                                  | The user can view the list of purchase orders created.                               | Must-have | ID, name, description and status of each purchase order is displayed in a list of orders.      | By default, all purchase orders are sorted by ID. The user can sort and filter using other fields. |
| Reporting capabilities.                                  | Reports on number of orders, sales, costs and profits are available.                 | Must-have | Real-time data on number of orders, sales, costs and profits is available and can be filtered. |                                                                                                    |
| Sync orders with invoices.                               | Order creation and updates use existing invoices to synchronize purchase order data. | Must-have | The user can use existing invoices for order creation and updating.                            | Make invoice data available for integration with purchase orders.                                  |
| Handle shipping labels.                                  | The user can create shipping labels.                                                 | Must-have | Items can be updated with shipping label information.                                          |                                                                                                    |