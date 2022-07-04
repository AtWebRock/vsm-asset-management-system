import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'asset-master',
  templateUrl: './asset-master.component.html',
  styleUrls: ['./asset-master.component.scss']  
})

export class AssetMasterComponent {
    displayedColumns = ['assetId', 'assetCode', 'assetName', 'assetQunatity', 'assetDescription', 'assetStatus'];
    dataSource = ELEMENT_DATA;

    assetCode = new FormControl('', [Validators.required, Validators.email]);
    assetName = new FormControl('', [Validators.required]);
    assetQty = new FormControl('', [Validators.required]);
    assetDescription = new FormControl('', [Validators.required])
    assetStatus = new FormControl('', [Validators.required])
}

export interface Asset {
    assetId: number;
    assetName: string;
    assetCode: string,
    assetQunatity: number;
    assetDescription: string;
    assetStatus: string;
  }

  const ELEMENT_DATA: Asset[] = [
    {assetId: 1, assetName: 'Shutter-1', assetCode: 'A01', assetQunatity: 300, assetDescription:'Shuttering Material', assetStatus:'Active'},
    {assetId: 2, assetName: 'Shutter-2', assetCode: 'A02', assetQunatity: 400, assetDescription:'Shuttering Material', assetStatus:'Active'},
    {assetId: 3, assetName: 'Shutter-3', assetCode: 'A03', assetQunatity: 500, assetDescription:'Shuttering Material', assetStatus:'Active'},
    {assetId: 4, assetName: 'Shutter-4', assetCode: 'A04', assetQunatity: 600, assetDescription:'Shuttering Material', assetStatus:'Active'},
    {assetId: 5, assetName: 'Shutter-5', assetCode: 'A05', assetQunatity: 700, assetDescription:'Shuttering Material', assetStatus:'Active'},
    {assetId: 6, assetName: 'Shutter-6', assetCode: 'A06', assetQunatity: 800, assetDescription:'Shuttering Material', assetStatus:'Active'},
     
  ];

