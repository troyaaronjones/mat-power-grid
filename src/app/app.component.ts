import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { GridHeading, GridRequest, GridMasterDetailConfig } from 'mat-power-grid';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Tab 1: Client Side Overview
  overviewHeadings: GridHeading[] = [
    { fieldName: 'id', display: 'ID', type: 'number', width: '80px', sort: 'asc' },
    { fieldName: 'employeeName', display: 'Employee Name', type: 'string', width: '200px' },
    { fieldName: 'department', display: 'Department', type: 'string', width: '160px' },
    { fieldName: 'role', display: 'Role Title', type: 'string', width: '180px' },
    { fieldName: 'salary', display: 'Annual Salary', type: 'currency', prefix: '$', width: '140px', textAlign: 'right' },
    { fieldName: 'status', display: 'Status', type: 'string', width: '130px' },
    { fieldName: 'startDate', display: 'Start Date', type: 'date', dateFormat: 'yyyy-MM-dd', width: '140px' }
  ];

  overviewData = [
    { id: 101, employeeName: 'Sarah Jenkins', department: 'Engineering', role: 'Staff Software Engineer', salary: 165000, status: 'Active', startDate: '2021-03-15', rowBg: '#e8f5e9' },
    { id: 102, employeeName: 'Marcus Vance', department: 'Product Management', role: 'Principal PM', salary: 158000, status: 'Active', startDate: '2020-08-01' },
    { id: 103, employeeName: 'Elena Rostova', department: 'Design', role: 'Lead UX Designer', salary: 142000, status: 'On Leave', startDate: '2019-11-12', rowBg: '#fff3e0' },
    { id: 104, employeeName: 'David Chen', department: 'Engineering', role: 'Senior Frontend Dev', salary: 138000, status: 'Active', startDate: '2022-01-10' },
    { id: 105, employeeName: 'Aisha Patel', department: 'Marketing', role: 'Growth Director', salary: 149000, status: 'Active', startDate: '2018-05-20' },
    { id: 106, employeeName: 'Tom Harrison', department: 'Sales', role: 'Account Executive', salary: 115000, status: 'Active', startDate: '2023-04-03' },
    { id: 107, employeeName: 'Rachel Kim', department: 'Engineering', role: 'DevOps Lead', salary: 155000, status: 'Active', startDate: '2020-02-18' },
    { id: 108, employeeName: 'James Wilson', department: 'Customer Success', role: 'CS Manager', salary: 108000, status: 'Active', startDate: '2021-09-25' }
  ];

  // Tab 2: Server-Side & Multi-Filtering
  serverHeadings: GridHeading[] = [
    { fieldName: 'sku', display: 'SKU Tag', type: 'string', filterType: 'tag', width: '140px' },
    { fieldName: 'productName', display: 'Product Name', type: 'string', width: '220px' },
    { 
      fieldName: 'category', 
      display: 'Category', 
      type: 'string', 
      filterType: 'multi-select', 
      width: '160px',
      other: {
        selectionMode: 'multiple',
        source: 'internal',
        optionsObject: [
          { text: 'Electronics', value: 'Electronics' },
          { text: 'Furniture', value: 'Furniture' },
          { text: 'Office Gear', value: 'Office Gear' },
          { text: 'Software', value: 'Software' }
        ]
      }
    },
    { fieldName: 'price', display: 'Price', type: 'number', prefix: '$ ', width: '130px' },
    { fieldName: 'rating', display: 'Rating', type: 'number', width: '110px' },
    { fieldName: 'releaseDate', display: 'Release Date', type: 'date', dateFormat: 'yyyy-MM-dd', width: '150px' }
  ];

  allServerProducts = [
    { sku: 'SKU-101', productName: '4K UltraMonitor 34"', category: 'Electronics', price: 699.99, rating: 4.8, releaseDate: '2026-01-15' },
    { sku: 'SKU-102', productName: 'Ergonomic Desk Chair', category: 'Furniture', price: 349.50, rating: 4.6, releaseDate: '2026-01-20' },
    { sku: 'SKU-103', productName: 'Mechanical Keyboard RGB', category: 'Office Gear', price: 129.99, rating: 4.9, releaseDate: '2026-02-01' },
    { sku: 'SKU-104', productName: 'Cloud Suite License', category: 'Software', price: 1200.00, rating: 4.7, releaseDate: '2026-02-10' },
    { sku: 'SKU-105', productName: 'Noise Cancelling Headset', category: 'Electronics', price: 249.00, rating: 4.5, releaseDate: '2026-02-14' },
    { sku: 'SKU-106', productName: 'Standing Desk Converter', category: 'Furniture', price: 210.00, rating: 4.4, releaseDate: '2026-02-18' },
    { sku: 'SKU-107', productName: 'Wireless Laser Mouse', category: 'Office Gear', price: 59.99, rating: 4.3, releaseDate: '2026-02-22' },
    { sku: 'SKU-108', productName: 'Cloud Analytics Pro', category: 'Software', price: 850.00, rating: 4.9, releaseDate: '2026-03-01' }
  ];

  // Tab 3: Master Detail Expansion
  masterHeadings: GridHeading[] = [
    { fieldName: 'accountId', display: 'Account ID', type: 'string', width: '130px' },
    { fieldName: 'companyName', display: 'Company Name', type: 'string', width: '220px' },
    { fieldName: 'planTier', display: 'Subscription Plan', type: 'string', width: '180px' },
    { fieldName: 'mrr', display: 'Monthly Revenue', type: 'currency', prefix: '$', width: '150px' },
    { fieldName: 'seats', display: 'Seat Count', type: 'number', width: '120px' }
  ];

  masterData = [
    { accountId: 'ACC-8801', companyName: 'Acme Global Services', planTier: 'Enterprise Platinum', mrr: 12500, seats: 145, contactEmail: 'billing@acme-global.com', region: 'North America', notes: 'Key enterprise partner. Annual contract renewal in Q4.' },
    { accountId: 'ACC-8802', companyName: 'NovaTech Solutions', planTier: 'Pro Business', mrr: 3400, seats: 32, contactEmail: 'ops@novatech.io', region: 'EMEA', notes: 'Upgraded from Starter tier in January.' },
    { accountId: 'ACC-8803', companyName: 'Quantum Labs Inc', planTier: 'Enterprise Gold', mrr: 8900, seats: 88, contactEmail: 'admin@quantumlabs.org', region: 'Asia Pacific', notes: 'Requires multi-region compliance data residency.' },
    { accountId: 'ACC-8804', companyName: 'Summit Media House', planTier: 'Pro Business', mrr: 2100, seats: 18, contactEmail: 'finance@summitmedia.co', region: 'North America', notes: 'Standard monthly subscription.' }
  ];

  masterDetailConfig: GridMasterDetailConfig = {
    type: 'html',
    multipleExpansion: false,
    template: `
      <div style="padding: 12px 24px; background: #fafafa; border-left: 4px solid #3f51b5; margin: 4px 0;">
        <p style="margin: 0 0 8px 0; font-size: 13px; color: #555;">
          <strong>Primary Contact:</strong> {{contactEmail}} &nbsp;|&nbsp;
          <strong>Regional Sector:</strong> {{region}} &nbsp;|&nbsp;
          <strong>Account Notes:</strong> {{notes}}
        </p>
      </div>
    `
  };

  ngOnInit(): void {}

  // Callback for custom postData handler in Server Grid
  fetchServerGridData = (req: GridRequest): Observable<any> => {
    let filtered = [...this.allServerProducts];

    // Apply sorting
    if (req.sortField && req.sort) {
      const field = req.sortField as keyof typeof filtered[0];
      const direction = req.sort;
      filtered.sort((a: any, b: any) => {
        const valA = a[field];
        const valB = b[field];
        if (valA < valB) return direction === 'asc' ? -1 : 1;
        if (valA > valB) return direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    const mockResponse = {
      statusCode: 200,
      payload: {
        gridData: filtered,
        totalCount: filtered.length
      }
    };

    return of(mockResponse).pipe(delay(50));
  };

  getOverviewDataCallback = (req: GridRequest): Observable<any> => {
    return of({
      statusCode: 200,
      payload: {
        gridData: this.overviewData,
        totalCount: this.overviewData.length
      }
    });
  };

  getMasterDataCallback = (req: GridRequest): Observable<any> => {
    return of({
      statusCode: 200,
      payload: {
        gridData: this.masterData,
        totalCount: this.masterData.length
      }
    });
  };

  rowBackgroundFn = (item: any, index: number): string => {
    return item.rowBg || '';
  };
}
