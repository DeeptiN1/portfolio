---
title: Release Notes
nav_order: 6
---

# SimpliCompense Invoicing App changes
{: .no_toc }

April 15, 2024 \
Latest Stable Version: 4.1

## New Features
* **Additional payment options.** \
    * In addition to Stripe, SimpliCompense now supports integration with SecurePay and PayPal.
* **Invoice report customization.** \
    * Add notes and formulas to reports. 
    * Drag and drop rows and columns to reorder data. 
    * Use filters to generate different types of reports. 
    * Add metrics to measure results and generate graphs and charts.
* **Quote to Invoice conversion.** \
    * Import quotes to generate invoices at the click of a button.

## Bug Fixes + Improvements
* Improved error handling on removal of scheduled invoices.
* Fixed standard message formatting on invoice templates.
* Corrected timestamp on CSV files for exported invoices.

## Deprecated features
* The `List Invoice` button on the invoice management tab is no longer available. Instead, the list of invoices is immediately updated and visible in the sidebar.
* The email address list for sending invoices is no longer included when managing each invoice. It is still available as a separate menu item.
