import { Component } from '@angular/core';



/*
1. class ( data + behavior)
2. template ( UI code - html)
3. configuration / metadata
*/
@Component({
    selector:'la-nav',
    template: `
        <div class="main">
            <ul>
                <li><a [routerLink]="'home'" [routerLinkActive]="'active'">Home</a></li>
                <li><a [routerLink]="'products'" [routerLinkActive]="'active'">Products</a></li>
                <li><a [routerLink]="'about'" [routerLinkActive]="'active'">About</a></li>
            </ul>
        </div>
    `,
    styles:[`
    .active{
        background-color:crimson;
    }`,   
    `
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }`,`
    li {
        display:inline;
        padding: 10px;
        background-color: #dddddd;
    }
    `,` a { text-decoration:none}`
]
})
export class NavigationComponent{

}