const ASIDE_OVERLAY_HTML = '<div class="aside_overlay close_aside"></div>';
const $document = $(document);

function init() {
	let $overlay = $('.aside_overlay');
	if (!$overlay.length) {
			$overlay = $(ASIDE_OVERLAY_HTML);
			$('body').append($overlay);
	}
}

function close() {
    $('body').removeClass('aside_open');
    $('.aside.open').removeClass('open')
        .trigger('aside:close');
}

function open($aside) {
    const $body = $('body');

    $body.addClass('aside_open');

    if ($aside.attr('data-aside-overlay') === 'false') {
        $body.addClass('no_overlay');
    }

    $aside.addClass('open')
        .trigger('aside:open');
}



function toggleAside() {
    let $button = $(this);
    let id = $button.attr('data-aside-id');

    if (!id) return;
    if (id[0] !== '#') id = '#'.concat(id);

    let $aside = $document.find(id);

    if (!$aside.length) return;

    if (document.body.classList.contains('aside_open')) {
        close();
    } else {
        close();
        open($aside);
    }
};

init();

$document.on('click', '[data-toggle="aside"]', toggleAside);
$document.on('click', '[data-toggle-aside="aside"]', toggleAside);
$document.on('click', '.close_aside', close);