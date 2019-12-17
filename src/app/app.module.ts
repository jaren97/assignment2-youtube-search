import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
import { YouTubeSearchService } from './youtube-search.service'
import { YouTubeServiceInjectables } from './youtube-search.spec';
import { SearchBoxComponent } from './searchBox/search-box.component';
import { SearchResultComponent } from './searchResult/search-result.component';
import { YouTubeSearchComponent } from './youtubeSearch/youtube-search.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, SearchBoxComponent, SearchResultComponent, YouTubeSearchComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [YouTubeSearchService, YouTubeServiceInjectables]
})
export class AppModule { }
