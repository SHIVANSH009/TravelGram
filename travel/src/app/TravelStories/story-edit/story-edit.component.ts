import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TravelStoryService } from '../travelstory.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-story-edit',
  templateUrl: './story-edit.component.html',
  styleUrls: ['./story-edit.component.css']
})
export class StoryEditComponent implements OnInit {
id:number;
mode = false;
locform:FormGroup;
  constructor(private route:ActivatedRoute,
              private ls:TravelStoryService,
              private router: Router) { }

  onSubmit()
  {
    if(this.mode)
      this.ls.updateloc(this.id,this.locform.value);
    else
      this.ls.addloc(this.locform.value);
    this.oncancel(); 
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.mode = params['id'] != null;
        this.initform();
      }
    )
  }

  onadding()
  {
    (<FormArray>this.locform.get('moments')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required)
      })
    )
  }

  oncancel()
  {
    this.router.navigate(['../'],{relativeTo: this.route});
  }
  private initform()
  {
    let locname = "";
    let imagepath = "";
    let description = "";
    let placemoments = new FormArray([]);

    if(this.mode)
    {
      const locss = this.ls.getstory(this.id);
      locname = locss.name;
      imagepath = locss.image;
      description = locss.description;
      if(locss['moments']){
        for(let p of locss.place)
        {
          placemoments.push(
            new FormGroup({
              name: new FormControl(p.pl_name,Validators.required)
            })
          )
        }
      }
    }

    this.locform = new FormGroup({
      'name': new FormControl(locname,Validators.required),
      'imagePath': new FormControl(imagepath,Validators.required),
      'description': new FormControl(description,Validators.required),
      'moments': placemoments
    });
  }

  ondeleteloci(index:number)
  {
    (<FormArray>this.locform.get('moments')).removeAt(index);
  }
}
