import { Component, OnInit } from '@angular/core';
import { 
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
  RouterState,
  RouterStateSnapshot 
} from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(
    private activated: ActivatedRoute,
    private router: Router,
  ) { 
    const state: RouterState = router.routerState;
    const snapshot: RouterStateSnapshot = state.snapshot;
    const root: ActivatedRouteSnapshot = snapshot.root;
    const child = root.firstChild;
  }


  ngOnInit(): void {
    
  }


}
