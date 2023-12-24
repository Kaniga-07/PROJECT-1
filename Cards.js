import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './Cards.css';
const HotelManagementFeatures = () => {
  return (
    <div className="cards-container">
      <Card>
        <CardContent>
          <Typography variant="h6">Bookings Management</Typography>
          <p>Efficiently manage bookings from guests, check availability, and streamline reservation processes.</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6">Housekeeping</Typography>
          <p>Coordinate housekeeping tasks, track room cleaning status, and ensure a clean and comfortable environment for guests.</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6">Accounting and Finance</Typography>
          <p>Handle financial transactions, billing, and generate reports to track the financial health of the hotel.</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6">Front Desk Operations</Typography>
          <p>Streamline front desk tasks, manage guest check-ins and check-outs, and provide excellent customer service.</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6">Banquet Management</Typography>
          <p>The Banquet Software covers Venue Availability, Booking enquiry, Banquet Booking, Catalogue & Menu Creation, Function Prospectus, Chef’s Pre-costing, Cover Analysis, Billing & Settlement etc.</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6">Hotel Procurement Software</Typography>
          <p>The Hotel Procurement & Purchase module manages Indents from departments, Kitchen requisitions, Purchase order, Vendor Analysis, Material Receipts & Purchases.</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6">Financial Management</Typography>
          <p>The Hotel Accounting Software integrated with Front Office, POS & other modules maintains Account Receivables/Payables, Bank Reconciliation, Ledgers, Cash/Bank Books, Trial, Profit & Loss, Balance Sheet, GST Accounting etc.</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6">Stores & Inventory</Typography>
          <p>The Hotel Inventory management software supports single or Multiple Stores, Material Issue to Dept., Order Level Tracking, Wastage & Expiry tracking, Kitchen Closing Stock, Stock Variance, Stock Valuation.</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6">Sales & Marketing</Typography>
          <p>The Hotel Management Solution Sales & Marketing module manages corporate client master, Tag amenities and rates to corporates and travel agents, Corporate MIS on revenues, room nights and ARR.</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6">Hotel Billing Software</Typography>
          <p>The Hotel Billing Software manages individual Guest Billing, Corporate and Group Billing, and Billing for food Outlets, Coffee shops, Restaurants & Bars, cafes, and ice cream parlors.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HotelManagementFeatures;
