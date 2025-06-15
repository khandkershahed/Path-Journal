{{-- @if ($breakingNews->count() > 0)
    <section class="bg-danger">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="wrapp__list__article-responsive wrapp__list__article-responsive-carousel">
                        @foreach ($breakingNews as $news)
                            <div class="item">
                                <!-- Post Article -->
                                <div class="card__post card__post-list">
                                    <div class="image-sm">
                                        <a href="{{ route('news-details', $news->slug) }}">
                                            <img src="{{ asset($news->image) }}" class="img-fluid" alt="">
                                        </a>
                                    </div>

                                    <div class="card__post__body ">
                                        <div class="card__post__content">

                                            <div class="card__post__author-info mb-2">
                                                <ul class="list-inline">
                                                    <li class="list-inline-item">
                                                    <span class="text-primary">
                                                        {{ __('frontend.by') }} {{ $news->auther->name }}
                                                    </span>
                                                </li>
                                                    <li class="list-inline-item">
                                                        <span class="text-dark text-capitalize">
                                                            {{ date('M d, Y', strtotime($news->created_at)) }}
                                                        </span>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div class="card__post__title">
                                                <h6>
                                                    <a href="{{ route('news-details', $news->slug) }}">
                                                        {!! truncate($news->title) !!}
                                                    </a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach

                    </div>
                </div>
            </div>
        </div>
    </section>
@endif --}}

<style>
    .breaking-news-ticker {
        display: flex;
        align-items: center;
        background-color: #dc3545;
        /* Bootstrap red */
        color: white;
        padding: 0px;
        font-family: 'Arial', sans-serif;
        overflow: hidden;
        position: relative;
        z-index: 1000;
    }

    .breaking-news-label {
        background-color: #a71d2a;
        padding: 1em;
        font-weight: bold;
        font-size: 14px;
        text-transform: uppercase;
        flex-shrink: 0;
    }

    .ticker-wrapper {
        overflow: hidden;
        position: relative;
        flex-grow: 1;
    }

    .ticker-move {
        display: inline-block;
        white-space: nowrap;
        padding-left: 100%;
        animation: ticker-scroll 80s linear infinite;
    }

    .ticker-item {
        display: inline-block;
        color: white;
        text-decoration: none;
        font-size: 1.2em;
        font-weight: 500;
        margin-right: 30px;
    }

    .ticker-item:hover {
        text-decoration: underline;
        color: #edff03;
    }

    .separator {
        margin-right: 30px;
        font-size: 18px;
        color: white;
        vertical-align: middle;
    }

    @keyframes ticker-scroll {
        0% {
            transform: translateX(0%);
        }

        100% {
            transform: translateX(-100%);
        }
    }

    .ticker-wrapper:hover .ticker-move {
        animation-play-state: paused;
    }

    @media screen and (min-width: 320px) and (max-width: 575px) {
        .breaking-news-label {
            padding: 13px 7px;
            font-size: 11px;
        }

        .ticker-item {
            font-size: 1em;
            margin-right: 30px;
        }
    }
</style>

@if ($breakingNews->count() > 0)
    <section class="container py-2">
        <div class="breaking-news-ticker">
            <div class="breaking-news-label">
                {{ __('Breaking News') }}
            </div>
            <div class="ticker-wrapper">
                <div class="ticker-move">
                    @foreach ($breakingNews as $news)
                        <a href="{{ route('news-details', $news->slug) }}" class="ticker-item">
                            {{ ($news->title) }}
                        </a>
                        <span class="separator">&bull;</span>
                    @endforeach
                </div>
            </div>
        </div>
    </section>
@endif
