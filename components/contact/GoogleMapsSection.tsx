export default function ContactMap() {
    return (
        <section className="px-6 pb-24">

            <div className="max-w-7xl mx-auto">

                <div className="rounded-xl overflow-hidden border">

                    <iframe
                        src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-[400px]"
                        loading="lazy"
                    ></iframe>

                </div>

            </div>

        </section>
    );
}