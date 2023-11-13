import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { VideoComponent } from './components/video/video.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <mat-toolbar color="primary"> My Deferred Blog! </mat-toolbar>
    <div class="container">
      <section class="blog">
        <h1>Angular v17 is released!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed vitae mollis arcu, et rhoncus est.
          Morbi pulvinar mauris risus, ac rutrum nunc sodales non. Duis dictum
          eros vitae tortor consectetur fermentum. Vestibulum venenatis ornare
          felis vulputate varius. Aliquam aliquet orci sollicitudin aliquam
          gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>

        <!-- Idle trigger: when browser is in idle condition -->
        <!--
          @defer(on viewport) {
           <app-video id="sitHfnoeT88" />
          }
        -->

        <!-- Viewport trigger: it requires @placeholder, We can also specify minimum option 
        for both @placeholder and @loading(optional) block -->
        @defer(on viewport) {
        <app-video id="sitHfnoeT88" />
        } @placeholder {
        <app-placeholder />
        } @loading(minimum 500ms) {
        <app-placeholder [loading]="true" />
        } 

        <!-- timer trigger: wait till time finish -->
        <!-- @defer(on timer(5s)) {
        <app-video id="sitHfnoeT88" />
        } @placeholder {
        <app-placeholder />
        } -->

        <!-- We can also combine trigger; it is or condition. Which one condition trigger first it will 
        load the content -->
        <!-- @defer(on viewport; on timer(5s)) {
        <app-video id="sitHfnoeT88" />
        } @placeholder {
        <app-placeholder />
        } -->

        <!-- hover trigger: it will not load until we hover on placeholder -->
        <!-- @defer(on hover) {
        <app-video id="sitHfnoeT88" />
        } @placeholder {
        <app-placeholder />
        } -->
        <!-- interaction trigger: it will not load until we click on placeholder -->
        <!-- @defer(on interaction) {
        <app-video id="sitHfnoeT88" />
        } @placeholder {
        <app-placeholder />
        } -->
        <!-- Prefetch; it will prefetch all the files on hover/timer/viewport. and it will load only on click  -->
        <!-- @defer(on interaction; prefetch on hover) {
        <app-video id="sitHfnoeT88" />
        } @placeholder {
        <app-placeholder />
        } -->
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        @defer(on interaction) {
        <app-video id="sitHfnoeT88" />
        }@placeholder {
        <app-placeholder />
        } @loading (minimum 500ms) {
        <app-placeholder [loading]="true" />
        }

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <h1 #click1>Click me to load video</h1>
        @defer (on interaction(click1)) {
          <app-video id="sitHfnoeT88" />
        }@placeholder {
        <app-placeholder />
        }
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <h1 #click2>Hover me to load video</h1>
        @defer (on hover(click2)) {
          <app-video id="sitHfnoeT88" />
        }@placeholder {
        <app-placeholder />
        }

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <h1 #click3>ViewPort</h1>
        @defer (on viewport(click3)) {
          <app-video id="sitHfnoeT88" />
        }@placeholder {
        <app-placeholder />
        }

      </section>
    </div>
  `,
  styles: `
      .container {
        padding: 24px;
        height: calc(100vh - 113px);
        overflow: auto;
      }

      .blog {
        margin: auto;
        max-width: 800px;
        font-size: 1.1rem;

        > * {
          padding-bottom: 12px;
          padding-top: 12px;
        }
      }
    `,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    VideoComponent,
    PlaceholderComponent,
  ],
})
export class AppComponent {}
