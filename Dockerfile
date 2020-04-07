FROM continuumio/miniconda3:4.8.2

ENV CONDA_ALWAYS_YES="true"
RUN conda install conda-build conda-verify anaconda-client --yes --quiet
COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]