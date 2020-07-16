import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

var apis = {
  contact : environment.host + "contactusmail"
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
// englishtitle= "dnabhasbchbahbca";
// englishdesc = "drrcvtybvcfdxdcfvgbhtyfrdqdwtqfguhwjqwbcgsvg";
// englishkeywords = "sbabbsabcabschbabcsb";

// saudititle = "jhahbasjbhjab";
// saudidescription = "lorembdhasbchbashcbabca";
// saudikeywords = "bcbcbc";
  constructor(private http : Http) { }

  contact(body) {
    return this.http.post(apis.contact, body).pipe(map((res) => res.json()));
  }
}
